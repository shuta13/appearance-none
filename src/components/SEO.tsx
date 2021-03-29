import Head from 'next/head';
import { BlogDescription, BlogTitle, DefaultJsonId } from '../config';

type Props = {
  title?: string;
  description?: string;
  propsJsonLd?: typeof DefaultJsonId;
};

// see: https://github.com/vercel/next.js/issues/2213#issuecomment-307478160
// see: https://technicalseo.com/tools/schema-markup-generator/
const jsonLd = (args: typeof DefaultJsonId) => {
  const { title, updated, url, imageUrl, description } = args;

  const json = [
    {
      '@context': 'http://schema.org',
      '@type': 'Article',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      headline: title,
      description: description,
      url: url,
      image: [imageUrl],
      author: {
        '@type': 'Person',
        name: 'did0es',
        url: 'https://did0es.me',
      },
      publisher: {
        '@type': 'Organization',
        name: 'did0es',
        url: 'https://did0es.me',
        logo: {
          '@type': 'ImageObject',
          url: 'https://blog.did0es.me/images/icon.png',
        },
      },
      datePublished: updated,
      dateModified: updated,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: BlogTitle,
          item: 'https://blog.did0es.me',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: title,
          item: url,
        },
      ],
    },
  ];
  return JSON.stringify(json);
};

export const SEO: React.FC<Props> = (props) => {
  const {
    title = BlogTitle,
    description = BlogDescription,
    propsJsonLd = DefaultJsonId,
  } = props;
  return (
    <Head>
      <link rel="icon" href="/images/icon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={`${description}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title}`} />
      <meta
        name="twitter:image"
        content="https://blog.did0es.me/images/og.png"
      />
      <meta name="twitter:description" content={`${description}`} />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://blog.did0es.me" />
      <meta property="og:title" content={`${title}`} />
      <meta property="og:site_name" content={`${title}`} />
      <meta property="og:description" content={`${description}`} />
      <meta
        property="og:image"
        content="https://blog.did0es.me/images/og.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://blog.did0es.me/images/og.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Source+Code+Pro&display=swap"
        rel="stylesheet"
      />
      <title>
        {title === BlogTitle ? BlogTitle : `${title} | ${BlogTitle}`}
      </title>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({ ...propsJsonLd }),
        }}
      />
    </Head>
  );
};
