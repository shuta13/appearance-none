import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { Card } from '../../components/Card';
import { SocialButtonContainer } from '../../components/SocialButtonContainer';
import { SEO } from '../../components/SEO';
import { getBlogData } from '~/usecases/getBlogData';

const BlogTag: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  entries,
}) => {
  return (
    <>
      <SEO />
      {entries.map((entry, i) => (
        <Card key={i} {...entry} />
      ))}
      <SocialButtonContainer />
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const data = await getBlogData();
  const entries = data.filter((d) =>
    d.head.tags.includes(context.params!.tag as string)
  );

  if (entries.length > 0) {
    return { props: { entries } };
  } else {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths = async () => {
  const data = await getBlogData();

  if (data != null) {
    const tags = [...new Set(data.map((d) => d.head.tags).flat())];
    const paths = tags.map((tag) => ({
      params: {
        tag,
      },
    }));
    return { paths, fallback: false };
  } else {
    throw new Error();
  }
};

export default BlogTag;
