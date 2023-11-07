import fs from 'fs';
import path from 'path';
import {
  GetPageResponse,
  ListBlockChildrenResponse,
  PageObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { createN2M, createNotionClient } from 'utils/notion';
import { BlockObjectResponse } from 'utils/notion-block-renderer';
import model from '~/models/articles';
import articlesBodyModel from '~/models/articleBody';
import ArticlesModel from '~/models/articles';
import { ExtendedRecordMap } from 'notion-types';
import { Client } from '@notionhq/client';

export type DatabaseResults = (QueryDatabaseResponse['results'][number] & {
  properties: Record<string, any>;
})[];
export type PagePropsResults = GetPageResponse &
  PageObjectResponse & {
    properties: Record<string, any>;
  };

export type Articles = {
  meta: {
    id: string;
  };
  head: {
    slug: string;
    tags: string[];
    created: string;
    updated: string;
    title: string;
    coverImageUrl: string;
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
  getArticles(params: { size?: number; tag?: string }): Promise<Articles>;
  getChildren(params: {
    id: string;
    size?: number;
  }): Promise<Articles[number]['body']>;
  getNotionMD(params: { id: string }): Promise<string>;
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
      const { properties: pageProps, ...pageData } =
        (await client.pages.retrieve({
          page_id: id,
        })) as unknown as PagePropsResults;
      const contents = await client.blocks.children.list({
        block_id: id,
      });
      const pageContents = await getPageResultsRecursively(
        client,
        id,
        contents
      );
      let coverImageUrl = '';
      if (
        pageData.cover?.type === 'file' &&
        !isImageExist(pageData.cover.file.url)
      ) {
        const blob = await fetch(pageData.cover.file.url).then((res) =>
          res.blob()
        );
        const binary = (await blob.arrayBuffer()) as ArrayBuffer;
        const buffer = Buffer.from(binary);
        fs.writeFileSync(
          path.join(imageBasePath, `/${pageData.id}_cover.png`),
          buffer
        );
        coverImageUrl = path.join(imagePathName, `/${pageData.id}_cover.png`);
      }
      if (pageData.cover?.type === 'external') {
        coverImageUrl = pageData.cover.external.url;
      }

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
          slug: pageProps.Slug.rich_text[0].plain_text,
          tags: pageProps.Tags.multi_select.map(
            ({ name }: { name: string }) => name
          ),
          created: pageProps.Created.date.start,
          updated: pageProps.Updated.last_edited_time,
          title: pageProps.Name.title[0].plain_text,
          coverImageUrl,
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
  async getArticles({ size = 100, tag = 'all' }) {
    const client = createNotionClient();
    const databaseId = process.env.NOTION_DATABASE_ID!;

    try {
      const or = [];
      if (tag !== 'all') {
        or.push({
          property: 'Tags',
          multi_select: {
            contains: tag,
          },
        });
      }
      const databaseResults = (
        await client.databases.query({
          database_id: databaseId,
          filter: {
            and: [
              {
                property: 'Status',
                select: {
                  equals: 'Published',
                },
              },
              {
                property: 'isTag',
                checkbox: {
                  equals: false,
                },
              },
              {
                or,
              },
            ],
          },
          page_size: size,
          sorts: [
            {
              property: 'Created',
              direction: 'descending',
            },
          ],
        })
      ).results as unknown as DatabaseResults;

      const entries: Articles = [];
      for (const result of databaseResults) {
        const pageProps = (
          (await client.pages.retrieve({
            page_id: result.id,
          })) as unknown as PagePropsResults
        ).properties;
        const contents = await client.blocks.children.list({
          block_id: result.id,
        });
        const pageContents = await getPageResultsRecursively(
          client,
          result.id,
          contents
        );
        entries.push({
          meta: {
            id: result.id,
          },
          head: {
            slug: pageProps.Slug.rich_text[0].plain_text,
            tags: pageProps.Tags.multi_select.map(
              ({ name }: { name: string }) => name
            ),
            created: pageProps.Created.date.start,
            updated: pageProps.Updated.last_edited_time,
            title: pageProps.Name.title[0].plain_text,
            coverImageUrl: pageProps.cover?.external.url ?? null,
          },
          body: (pageContents.results as BlockObjectResponse[]).map(
            articlesBodyModel.transform
          ),
        });
      }

      return entries.map(model.transform);
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
  async getNotionMD({ id }) {
    const n2m = createN2M();
    const blocks = await n2m.pageToMarkdown(id);
    const objects = n2m.toMarkdownString(blocks);
    return objects.parent;
  },
};

export default article;
