// see: https://oldbigbuddha.dev/posts/generate-rss
// see: https://github.com/TypeStrong/ts-node/issues/922#issuecomment-667076602

import * as dotenv from 'dotenv';
import { createClient, Entry } from 'contentful';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import * as fs from 'fs';
import { join } from 'path';
import { BlogHost, BlogTitle } from '../src/config';
import { Slug } from '../src/types/contentful-types';

dotenv.config();

dayjs.locale(ja);

const entryUrl = `${BlogHost}/entry`;
const rssUrl = `${BlogHost}/rss.xml`;

// const outputEntryDirPath = join(process.cwd(), 'out/entry');
const outputFeedXmlPath = join(process.cwd(), 'out/rss.xml');

const getEntries = async () => {
  const spaceId = process.env.SPACE_ID!;
  const accessToken = process.env.DELIVERY_KEY!;
  const client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });

  const entries = await client.getEntries<Slug>();
  if (entries != null) return entries;
  else throw new Error();
};

const createFeed = (item: Entry<Slug>) => ` <item>
    <title>${item.fields.title}</title>
    <link>${entryUrl}/${item.fields.slug}</link>
    <guid>${entryUrl}/${item.fields.slug}</guid>
    <pubDate>${dayjs(item.sys.createdAt)}</pubDate>
  </item>`;

(async () => {
  const entries = await getEntries();
  const feeds = entries.items.map((item) => createFeed(item));
  const lastBuildData = dayjs();

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

  try {
    await fs.promises.writeFile(outputFeedXmlPath, rss, 'utf-8');
  } catch (error) {
    throw error;
  }
})();
