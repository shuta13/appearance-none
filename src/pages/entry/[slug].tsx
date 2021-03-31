import { createClient, EntryCollection } from 'contentful';
import { Template } from '../../components/Template/Template';
import { useRouter } from 'next/router';
import type { Metadata, Slug } from '../../types/contentful-types';
import Head from 'next/head';
import ErrorPage from '../../pages/_error';

type Props = { entries: EntryCollection<Slug> | undefined };

const BlogPost: React.FC<Props> = (props) => {
  const { entries } = props;
  const router = useRouter();
  const { slug } = router.query;

  const article = entries?.items.reduce((prev, cur) => {
    if (cur.fields.slug === slug) return cur;
    return prev;
  });

  if (!article || !article?.sys.id)
    return <ErrorPage statusCode={404} message="not found" />;

  return (
    <>
      <Head>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </Head>
      <Template
        {...article}
        metadata={((article as unknown) as { metadata: Metadata }).metadata}
        prevSlug={''}
        nextSlug={''}
      />
    </>
  );
};

export const getStaticProps = async (params: { slug: string }) => {
  const { slug } = params;
  const spaceId = process.env.SPACE_ID!;
  const accessToken = process.env.DELIVERY_KEY!;
  const client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });
  const entries = await client.getEntries<Slug>();

  if (entries != null) {
    return { props: { entries }, revalidate: 1 };
  }
};

export const getStaticPaths = async () => {
  const spaceId = process.env.SPACE_ID!;
  const accessToken = process.env.DELIVERY_KEY!;
  const client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });
  const entries = await client.getEntries<Slug>();

  if (entries != null) {
    const paths = entries.items.map((item) => ({
      params: {
        slug: item.fields.slug,
      },
    }));
    return { paths, fallback: true };
  } else throw new Error();
};

export default BlogPost;
