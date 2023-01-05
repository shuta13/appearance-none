import {
  GetPageResponse,
  ListBlockChildrenResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { createNotionClient } from '~/utils/notion-client';

export type DatabaseResults = (QueryDatabaseResponse['results'][number] & {
  properties: Record<string, any>;
})[];
export type PagePropsResults = GetPageResponse & {
  properties: Record<string, any>;
};
export type Entries = {
  head: {
    slug: string;
    tags: string[];
    created: string;
    updated: string;
    title: string;
    coverImageUrl: string | null;
  };
  body: {
    content: ListBlockChildrenResponse['results'];
  };
}[];

export async function getBlogData() {
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

    const entries: Entries = [];
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
        body: {
          content: pageContents.results,
        },
      });
    }

    return entries;
  } catch (e) {
    throw e;
  }
}
