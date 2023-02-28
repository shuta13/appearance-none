import type { InferGetStaticPropsType } from 'next';
import { Card } from '~/components/Card';
import { SEO } from '~/components/SEO';
import { getArticles } from '~/usecases/getArticles';
import { getBaseLayout } from '~/components/Layouts/BaseLayout';
import { NextPageWithLayout } from './_app';

export const getStaticProps = async () => {
  const articles = await getArticles().invoke();

  if (articles != null) {
    return { props: { articles } };
  } else throw new Error();
};

const Home: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> =
  ({ articles }) => {
    return (
      <>
        <SEO />
        {articles.map((article, i) => (
          <Card {...article} key={i} />
        ))}
      </>
    );
  };

Home.getLayout = getBaseLayout;

export default Home;
