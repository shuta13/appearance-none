import type { GetServerSidePropsContext, InferGetStaticPropsType } from 'next';
import { Card } from '~/components/Card';
import { SEO } from '~/components/SEO';
import { getArticles } from '~/usecases/getArticles';
import { getBaseLayout } from '~/components/Layouts/BaseLayout';
import { NextPageWithLayout } from '../_app';

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const data = await getArticles().invoke({
    tag: (context.params?.tag as string) ?? 'all',
  });
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getArticles().invoke({ tag: 'all' });

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

const Tags: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> =
  ({ data }) => {
    return (
      <>
        <SEO />
        <article>
          <nav>
            <ul className="space-y-4">
              {data.map((article) => (
                <li key={article.meta.id} className="space-y-4">
                  <Card {...article} />
                </li>
              ))}
            </ul>
          </nav>
        </article>
      </>
    );
  };

Tags.getLayout = getBaseLayout;

export default Tags;
