import { Client } from '@notionhq/client';

export function createNotionClient() {
  const accessToken = process.env.NOTION_ACCESS_TOKEN!;
  return new Client({
    auth: accessToken,
  });
}
