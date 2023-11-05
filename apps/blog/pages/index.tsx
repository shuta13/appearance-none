import type { InferGetStaticPropsType } from 'next';
import { Card } from '~/components/Card';
import { SEO } from '~/components/SEO';
import { getArticles } from '~/usecases/getArticles';
import { getBaseLayout } from '~/components/Layouts/BaseLayout';
import { NextPageWithLayout } from './_app';

export const getStaticProps = async () => {
  const data = await getArticles().invoke({ tag: 'all' });

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

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ data }) => {
  return (
    <>
      <SEO />
      <article>
        <nav>
          <ul className="space-y-8">
            {data.map((article) => (
              <li key={article.meta.id}>
                <Card {...article} />
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </>
  );
};

Home.getLayout = getBaseLayout;

export default Home;
