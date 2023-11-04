import fs from 'fs';
import path from 'path';
import {
  GetPageResponse,
  ListBlockChildrenResponse,
  PageObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { createNotionClient } from 'utils/notion';
import { BlockObjectResponse } from 'utils/notion-block-renderer';
import articlesBodyModel from '~/models/articleBody';
import ArticlesModel from '~/models/articles';
import { ExtendedRecordMap } from 'notion-types';
import { Client } from '@notionhq/client';

export type DatabaseResults = (QueryDatabaseResponse['results'][number] & {
  properties: Record<string, any>;
})[];
export type PagePropsResults = GetPageResponse & {
  properties: Record<string, any>;
};

export type Articles = {
  meta: {
    id: string;
  };
  head: {
    created: string;
    updated: string;
    title: string;
    coverImageUrl: string | null;
  };
  body: {
    content: BlockObjectResponse;
    htmlStr: string;
  }[];
}[];

export type ArticlesForRNX = (Pick<Articles[number], 'meta' | 'head'> & {
  body: ExtendedRecordMap;
})[];

interface ArticleRepository {
  getArticle(params: { id: string }): Promise<Articles[number]>;
  getChildren(params: {
    id: string;
    size?: number;
  }): Promise<Articles[number]['body']>;
}

async function getPageResultsRecursively(
  client: Client,
  id: string,
  contents: ListBlockChildrenResponse
) {
  if (contents.has_more) {
    const nextPageContents = await client.blocks.children.list({
      block_id: id,
      start_cursor: contents.next_cursor || '',
    });
    contents.results = contents.results.concat(nextPageContents.results);
    await getPageResultsRecursively(client, id, nextPageContents);
    return contents;
  } else {
    return contents;
  }
}

const article: ArticleRepository = {
  async getArticle({ id }) {
    const client = createNotionClient();
    const imagePathName = '/notion-images';
    const imageBasePath = path.join('public', imagePathName);
    const isImageExist = (name: string) => {
      return fs.existsSync(path.join(imageBasePath, `/${name}.png`));
    };
    try {
      const pageProps = (await client.pages.retrieve({
        page_id: id,
      })) as PageObjectResponse;
      const contents = await client.blocks.children.list({
        block_id: id,
      });
      const pageContents = await getPageResultsRecursively(
        client,
        id,
        contents
      );
      for (const item of pageContents.results as BlockObjectResponse[]) {
        if (item.has_children) {
          item.children = await this.getChildren({
            id: item.id,
          });
          pageContents.results[pageContents.results.indexOf(item)] = item;
        }

        // Inspired: https://github.com/0si43/shetommy.com/pull/36/files
        if (item.type === 'image' && item.image.type === 'file') {
          if (!isImageExist(item.id)) {
            const blob = await fetch(item.image.file.url).then((res) =>
              res.blob()
            );
            const binary = (await blob.arrayBuffer()) as ArrayBuffer;
            const buffer = Buffer.from(binary);
            fs.writeFileSync(
              path.join(imageBasePath, `/${item.id}.png`),
              buffer
            );
          }
          item.image.file.url = `${imagePathName}/${item.id}.png`;
          pageContents.results[pageContents.results.indexOf(item)] = item;
        }
      }
      return {
        meta: {
          id,
        },
        head: {
          created: pageProps.created_time,
          updated: pageProps.last_edited_time,
          title:
            pageProps.properties.title.type === 'title'
              ? pageProps.properties.title.title[0].plain_text
              : '',
          coverImageUrl:
            pageProps.cover?.type === 'external'
              ? pageProps.cover.external.url
              : null,
        },
        body: ArticlesModel.normalizeList(
          (pageContents.results as BlockObjectResponse[]).map(
            articlesBodyModel.transform
          )
        ),
      };
    } catch (e) {
      throw e;
    }
  },
  async getChildren({ id, size = 100 }) {
    const client = createNotionClient();
    const children = await client.blocks.children.list({
      block_id: id,
      page_size: size,
    });
    return (children.results as BlockObjectResponse[]).map(
      articlesBodyModel.transform
    );
  },
};

export default article;
