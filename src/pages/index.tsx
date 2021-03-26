import { createClient } from 'contentful';
import type { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import type { Slug } from '../types/contentful-types';
import Head from 'next/head';
import { BlogTitle } from '../config';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: React.FC<Props> = (props) => {
  const { items } = props;

  return (
    <>
      <Head>
        <title>{BlogTitle}</title>
      </Head>
      {items.map((item, i) => (
        <Link href={`/entry/${item.fields.slug}`} key={i}>
          <a>{item.fields.title}</a>
        </Link>
      ))}
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
