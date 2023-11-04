// https://github.com/emilioschepis/website/blob/main/pages/blog.tsx
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import { BlogHost, BlogTitle } from '~/config';
import { Articles } from '~/repositories/article';
import { getArticles } from '~/usecases/getArticles';

dotenv.config();
dayjs.locale(ja);

const entryUrl = `${BlogHost}/entry`;
const rssUrl = `${BlogHost}/rss.xml`;

const createFeed = (entry: Articles[number]) => ` <item>
    <title>${entry.head.title}</title>
    <link>${entryUrl}/${entry.meta.id}</link>
    <guid>${entryUrl}/${entry.meta.id}</guid>
    <pubDate>${dayjs(entry.head.created).toString()}</pubDate>
  </item>`;

export const generateRss = (data: Articles) => {
  const feeds = data.map((d) => createFeed(d));
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
  const data = await getArticles().invoke({ tag: 'all' });

  const rss = generateRss(data);
  await fs.promises.writeFile(process.cwd() + '/public/rss.xml', rss);
})();
