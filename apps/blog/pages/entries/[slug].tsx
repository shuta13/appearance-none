import { Template } from '~/components/Template';
import { getArticle } from '~/usecases/getArticle';
import { GetServerSidePropsContext, InferGetStaticPropsType } from 'next';
import { NextPageWithLayout } from '~/pages/_app';
import { getBaseLayout } from '~/components/Layouts/BaseLayout';
import { SEO } from '~/components/SEO';
import { getArticles } from '~/usecases/getArticles';

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const article = await getArticle().invoke({
    id: context.params?.slug as string,
  });

  if (article != null) {
    return { props: { article } };
  } else {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths = async () => {
  const data = await getArticles().invoke({ tag: 'all' });

  if (data != null) {
    const paths = data.map((article) => ({
      params: {
        tag: article.head.tags[0],
        slug: article.meta.id,
      },
    }));
    return { paths, fallback: false };
  } else {
    throw new Error();
  }
};

const Slug: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> =
  (props) => {
    const { article } = props;

    return (
      <>
        <SEO title={article.head.title} description={article.head.title} />
        <Template {...article} />
      </>
    );
  };

Slug.getLayout = getBaseLayout;

export default Slug;
