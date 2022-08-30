import type { InferGetStaticPropsType } from 'next';
import type { Metadata, Slug } from '../../types/contentful-types';
import { Card } from '../../components/Card';
import { SocialButtonContainer } from '../../components/SocialButtonContainer';
import { SEO } from '../../components/SEO';
import { useRouter } from 'next/router';
import ErrorPage from '../_error';
import { getBlogPost } from '../../utils/contentful-client';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

// export const config = {
//   unstable_runtimeJS: false,
// };

const BlogTag: React.FC<Props> = (props) => {
  const { entries } = props;

  const router = useRouter();
  const tag = router.query.tag;

  if (!entries) return <ErrorPage statusCode={404} message="not found" />;

  const items = entries.items.filter((item) =>
    (item as unknown as { metadata: Metadata }).metadata.tags.some(
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
          metadata={(item as unknown as { metadata: Metadata }).metadata}
        />
      ))}
      <SocialButtonContainer />
    </>
  );
};

export const getStaticProps = async () => {
  const entries = await getBlogPost();

  if (entries != null) {
    return { props: { entries } };
  } else throw new Error();
};

export const getStaticPaths = async () => {
  const entries = await getBlogPost();

  if (entries != null) {
    const entryItemTags = entries.items.flatMap(
      (item) => (item as unknown as { metadata: Metadata }).metadata.tags
    );
    const tagNames = [
      ...new Set(entryItemTags.map((entryItemTag) => entryItemTag.sys.id)),
    ];
    const paths = tagNames.map((tag) => ({
      params: {
        tag,
      },
    }));
    return { paths, fallback: false };
  } else throw new Error();
};

export default BlogTag;
