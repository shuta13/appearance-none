import { Template } from '~/components/Template';
import { getArticle } from '~/usecases/getArticle';
import { getArticles } from '~/usecases/getArticles';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { NextPageWithLayout } from '../_app';
import { getBaseLayout } from '~/components/Layouts/BaseLayout';
import { SEO } from '~/components/SEO';
import { summarize } from 'utils/str';

export const getStaticProps = async (context: GetStaticPropsContext) => {
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
  const articles = await getArticles().invoke();

  if (articles != null) {
    const paths = articles.map((article) => ({
      params: {
        slug: article.meta.id,
      },
    }));
    return {
      paths,
      fallback: false,
    };
  } else {
    throw new Error();
  }
};

const Slug: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> =
  (props) => {
    const { article } = props;

    return (
      <>
        <SEO
          title={article.head.title}
          description={summarize(
            article.body.map((data) => data.htmlStr).join('')
          )}
        />
        <Template {...article} />
      </>
    );
  };

Slug.getLayout = getBaseLayout;

export default Slug;
