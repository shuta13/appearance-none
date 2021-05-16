import dayjs from 'dayjs';

export const BlogTitle = '{ appearance: none }';

export const BlogDescription = '{ appearance: none } は did0es のブログ';

export const BlogHost = 'https://blog.did0es.me';

export const OgImageUrl = 'https://blog.did0es.me/images/og.png';

export const DateNow = dayjs().toISOString();

export const TagsMap = {
  engineering: '技術',
  lifestyle: '生活',
  frontend: 'フロントエンド',
  react: 'React',
  webgl: 'WebGL',
  vj: 'VJ',
  nextjs: 'Next.js',
  others: 'その他',
};

export const DefaultJsonId = {
  title: BlogTitle,
  description: BlogDescription,
  url: BlogHost,
  imageUrl: OgImageUrl,
  updated: DateNow,
};
