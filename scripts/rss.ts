// https://github.com/emilioschepis/website/blob/main/pages/blog.tsx
import * as dotenv from 'dotenv';
dotenv.config();
import * as fs from 'fs';

import { createClient, Entry, EntryCollection } from 'contentful';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import { BlogHost, BlogTitle } from '../src/config';
import type { Slug } from '../src/types/contentful-types';

dayjs.locale(ja);

const entryUrl = `${BlogHost}/entry`;
const rssUrl = `${BlogHost}/rss.xml`;

const createFeed = (item: Entry<Slug>) => ` <item>
    <title>${item.fields.title}</title>
    <link>${entryUrl}/${item.fields.slug}</link>
    <guid>${entryUrl}/${item.fields.slug}</guid>
    <pubDate>${dayjs(item.sys.createdAt).toString()}</pubDate>
  </item>`;

export const generateRss = (entries: EntryCollection<Slug>) => {
  const feeds = entries.items.map((item) => createFeed(item));
  const lastBuildData = dayjs().toString();

  const rss = `<?xml version="1.0" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${BlogTitle}</title>
    <link>${BlogHost}</link>
    <description>${BlogTitle} は did0es のブログ</description>
    <language>ja</language>
    <lastBuildDate>${lastBuildData}</lastBuildDate>
    <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
    <atom:link href="${rssUrl}" rel="self" type="application/rss+xml" />
${feeds.join('\n')}
  </channel>
</rss>`;

  return rss;
};

(async () => {
  const spaceId = process.env.SPACE_ID!;
  const accessToken = process.env.DELIVERY_KEY!;
  const client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });

  const entries = await client.getEntries<Slug>();

  const rss = generateRss(entries);
  await fs.promises.writeFile(process.cwd() + '/public/rss.xml', rss);
})();
