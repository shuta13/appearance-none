import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';

export function createNotionClient() {
  const accessToken = process.env.NOTION_ACCESS_TOKEN!;
  return new Client({
    auth: accessToken,
  });
}

/** @see https://github.com/NotionX/react-notion-x/blob/master/readme.md#private-pages */
export function createNotionApi() {
  return new (class {})();
  // const authToken = process.env.NOTION_RNX_AUTH_TOKEN!;
  // const activeUser = process.env.NOTION_RNX_ACTIVE_USER!;
  // return new NotionAPI({authToken, activeUser});
}
