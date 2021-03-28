import Head from 'next/head';
import { createClient } from 'contentful';
import type { InferGetStaticPropsType } from 'next';
import type { Metadata, Slug } from '../types/contentful-types';
import { BlogTitle } from '../config';
import { Card } from '../components/Card/Card';
import Link from 'next/link';
import { generateRss } from '../utils/rss';
import fs from 'fs';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: React.FC<Props> = (props) => {
  const { items } = props;

  return (
    <>
      <Head>
        <title>{BlogTitle}</title>
      </Head>
      {items.map((item, i) => (
        <Card
          item={item}
          key={i}
          metadata={((item as unknown) as { metadata: Metadata }).metadata}
        />
      ))}
      <Link href="https://twitter.com/did0es" passHref={true}>
        <a>Twitter</a>
      </Link>
      <Link href="https://github.com/shuta13" passHref={true}>
        <a>GitHub</a>
      </Link>
      <Link href="/rss.xml">
        <a>RSS</a>
      </Link>
    </>
  );
};

export const getStaticProps = async () => {
  const spaceId = process.env.SPACE_ID!;
  const accessToken = process.env.DELIVERY_KEY!;
  const client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });

  const entries = await client.getEntries<Slug>();
  if (entries != null) {
    const rss = generateRss(entries);
    fs.writeFileSync(process.cwd() + '/public/rss.xml', rss);

    return { props: entries };
  } else throw new Error();
};

export default Home;
