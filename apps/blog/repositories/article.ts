import {
  GetPageResponse,
  PartialBlockObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { createNotionApi, createNotionClient } from 'utils/notion';
import { BlockObjectResponse } from '~/../../packages/utils/notion-block-renderer';
import model from '~/models/articles';
import articlesBodyModel from '~/models/articleBody';
import ArticlesModel from '~/models/articles';
import { ExtendedRecordMap } from 'notion-types';

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

export type ArticlesForRNX = (Pick<Articles[number], 'meta' | 'head'> & {
  body: ExtendedRecordMap;
})[];

interface ArticleRepository {
  // getArticleForRNX(params: { id: string }): Promise<ArticlesForRNX[number]>;
  // getArticlesForRNX(params: {
  //   size?: number;
  //   tag?: string;
  // }): Promise<ArticlesForRNX>;
  getArticle(params: { id: string }): Promise<Articles[number]>;
  getArticles(params: { size?: number; tag?: string }): Promise<Articles>;
  getChildren(params: {
    id: string;
    size?: number;
  }): Promise<Articles[number]['body']>;
}

const article: ArticleRepository = {
  // async getArticleForRNX({ id }) {
  //   const client = createNotionApi();
  //   try {
  //     const page = await client.getPage(id);
  //     const pageProps = page.block[0].value.properties;
  //     return {
  //       meta: {
  //         id,
  //       },
  //       head: {
  //         slug: pageProps.Slug.rich_text[0].plain_text,
  //         tags: pageProps.Tags.multi_select.map(
  //           ({ name }: { name: string }) => name
  //         ),
  //         created: pageProps.Created.created_time,
  //         updated: pageProps.Updated.last_edited_time,
  //         title: pageProps.Name.title[0].plain_text,
  //         coverImageUrl: pageProps.cover?.external.url ?? null,
  //       },
  //       body: page,
  //     };
  //   } catch (e) {
  //     throw e;
  //   }
  // },
  // async getArticlesForRNX({ size = 100, tag = 'all' }) {
  //   const client = createNotionApi();
  //   const databaseId = process.env.NOTION_DATABASE_ID!;
  //   const databaseViewId = process.env.NOTION_DATABASE_VIEW_ID!;

  //   try {
  //     const or = [];
  //     if (tag !== 'all') {
  //       or.push({
  //         property: 'Tags',
  //         multi_select: {
  //           contains: tag,
  //         },
  //       });
  //     }
  //     const databaseResults = (
  //       await client.getCollectionData(databaseId, databaseViewId, {})
  //     ).result;

  //     const { blockIds } = databaseResults;

  //     const entries: ArticlesForRNX = [];
  //     for (const id of blockIds) {
  //       const page = await client.getPage(id);
  //       const pageProps = page.block[0].value.properties;
  //       entries.push({
  //         meta: {
  //           id,
  //         },
  //         head: {
  //           slug: pageProps.Slug.rich_text[0].plain_text,
  //           tags: pageProps.Tags.multi_select.map(
  //             ({ name }: { name: string }) => name
  //           ),
  //           created: pageProps.Created.created_time,
  //           updated: pageProps.Updated.last_edited_time,
  //           title: pageProps.Name.title[0].plain_text,
  //           coverImageUrl: pageProps.cover?.external.url ?? null,
  //         },
  //         body: page,
  //       });
  //     }

  //     return entries;
  //   } catch (e) {
  //     throw e;
  //   }
  // },
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
      for (const item of pageContents.results as BlockObjectResponse[]) {
        if (item.has_children) {
          item.children = await this.getChildren({
            id: item.id,
          });
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
          created: pageProps.Created.created_time,
          updated: pageProps.Updated.last_edited_time,
          title: pageProps.Name.title[0].plain_text,
          coverImageUrl: pageProps.cover?.external.url ?? null,
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
