import {
  GetPageResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { createNotionClient } from 'utils/notion';
import { BlockObjectResponse } from '~/../../packages/utils/notion-block-renderer';
import model from '~/models/articles';
import articlesBodyModel from '~/models/articleBody';

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
    slug: string;
    tags: string[];
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

interface ArticleRepository {
  getArticle(params: { id: string }): Promise<Articles[number]>;
  getArticles(): Promise<Articles>;
}

const article: ArticleRepository = {
  async getArticle({ id }) {
    const client = createNotionClient();
    try {
      const pageProps = (
        (await client.pages.retrieve({
          page_id: id,
        })) as unknown as PagePropsResults
      ).properties;
      const pageContents = await client.blocks.children.list({
        block_id: id,
      });
      return {
        meta: {
          id,
        },
        head: {
          slug: pageProps.Slug.rich_text[0].plain_text,
          tags: pageProps.Tags.multi_select.map(
            ({ name }: { name: string }) => name
          ),
          created: pageProps.Created.created_time,
          updated: pageProps.Updated.last_edited_time,
          title: pageProps.Name.title[0].plain_text,
          coverImageUrl: pageProps.cover?.external.url ?? null,
        },
        body: (pageContents.results as BlockObjectResponse[]).map(
          articlesBodyModel.transform
        ),
      };
    } catch (e) {
      throw e;
    }
  },
  async getArticles() {
    const client = createNotionClient();
    const databaseId = process.env.NOTION_DATABASE_ID!;

    try {
      const databaseResults = (
        await client.databases.query({
          database_id: databaseId,
          filter: {
            property: 'Status',
            select: {
              equals: 'Published',
            },
          },
        })
      ).results as unknown as DatabaseResults;

      const entries: Articles = [];
      for (const result of databaseResults) {
        const pageProps = (
          (await client.pages.retrieve({
            page_id: result.id,
          })) as unknown as PagePropsResults
        ).properties;
        const pageContents = await client.blocks.children.list({
          block_id: result.id,
        });
        entries.push({
          meta: {
            id: result.id,
          },
          head: {
            slug: pageProps.Slug.rich_text[0].plain_text,
            tags: pageProps.Tags.multi_select.map(
              ({ name }: { name: string }) => name
            ),
            created: pageProps.Created.created_time,
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
};

export default article;
