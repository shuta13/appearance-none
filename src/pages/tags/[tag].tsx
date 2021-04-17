import { createClient } from 'contentful';
import type { InferGetStaticPropsType } from 'next';
import type { Metadata, Slug } from '../../types/contentful-types';
import { Card } from '../../components/Card';
import { SocialButtonContainer } from '../../components/SocialButtonContainer';
import { SEO } from '../../components/SEO';
import { useRouter } from 'next/router';
import ErrorPage from '../_error';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const BlogTag: React.FC<Props> = (props) => {
  const { entries } = props;

  const router = useRouter();
  const tag = router.query.tag;

  if (!entries) return <ErrorPage statusCode={404} message="not found" />;

  const items = entries.items.filter((item) =>
    ((item as unknown) as { metadata: Metadata }).metadata.tags.some(
      (t) => t.sys.id === tag
    )
  );

  return (
    <>
      <SEO />
      {items.map((item, i) => (
        <Card
          item={item}
          key={i}
          metadata={((item as unknown) as { metadata: Metadata }).metadata}
        />
      ))}
      <SocialButtonContainer />
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
    return { props: { entries }, revalidate: 60 };
  } else throw new Error();
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
    const item = entries.items.reduce((prev, cur) => {
      if (Object.prototype.hasOwnProperty.call(cur, 'metadata')) return cur;
      return prev;
    });

    if (item) {
      const paths = ((item as unknown) as {
        metadata: Metadata;
      }).metadata.tags.map((tag) => ({
        params: {
          tag: tag.sys.id,
        },
      }));
      return { paths, fallback: true };
    }
  } else throw new Error();
};

export default BlogTag;
