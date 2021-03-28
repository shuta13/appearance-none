import Head from 'next/head';
import { createClient } from 'contentful';
import type { InferGetStaticPropsType } from 'next';
import type { Slug } from '../types/contentful-types';
import { BlogTitle } from '../config';
import { Card } from '../components/Card';
import Link from 'next/link';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: React.FC<Props> = (props) => {
  const { items } = props;

  return (
    <>
      <Head>
        <title>{BlogTitle}</title>
      </Head>
      {items.map((item, i) => (
        <Card item={item} key={i} />
      ))}
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
  if (entries != null) return { props: entries };
  else throw new Error();
};

export default Home;
