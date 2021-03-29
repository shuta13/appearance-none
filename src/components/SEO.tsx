import dayjs from 'dayjs';
import Head from 'next/head';

type JsonLd = {
  title: string;
  updated: string;
  url: string;
  imageUrl: string;
  description: string;
};

// @see https://github.com/vercel/next.js/issues/2213#issuecomment-307478160
const jsonLd = ({ title, updated, url, imageUrl, description }: JsonLd) => {
  const json = {
    '@context': 'http://schema.org',
    '@type': 'Website',
    name: title,
    headline: title,
    datePublished: dayjs().toString(),
    dateModified: updated,
    url: url,
    mainEntityOfPage: url,
    image: [imageUrl],
    description: description,
  };
  return JSON.stringify(json);
};

export const SEO: React.FC = () => (
  <Head>
    <link rel="icon" href="/images/icon.png" />
    <meta
      name="description"
      content="{ appearance: none } は did0es のブログ"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{ appearance: none }" />
    <meta name="twitter:image" content="https://blog.did0es.me/images/og.png" />
    <meta
      name="twitter:description"
      content="{ appearance: none } は did0es のブログ"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://blog.did0es.me" />
    <meta property="og:title" content="{ appearance: none }" />
    <meta property="og:site_name" content="{ appearance: none }" />
    <meta
      property="og:description"
      content="{ appearance: none } は did0es のブログ"
    />
    <meta property="og:image" content="https://blog.did0es.me/images/og.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Source+Code+Pro&display=swap"
      rel="stylesheet"
    />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd({
          title: '{ appearance: none }',
          description: '{ appearance: none } は did0es のブログ',
          imageUrl: 'https://blog.did0es.me/images/og.png',
          url: 'https://blog.did0es.me',
          updated: dayjs().toString(),
        }),
      }}
    />
  </Head>
);
