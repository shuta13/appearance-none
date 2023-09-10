import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

export function createNotionClient() {
  const accessToken = process.env.NOTION_ACCESS_TOKEN!;
  return new Client({
    auth: accessToken,
  });
}

export function createN2M() {
  const notionClient = createNotionClient();
  return new NotionToMarkdown({ notionClient });
}
