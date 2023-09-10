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
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-4 md:gap-8">
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

Home.getLayout = getBaseLayout;

export default Home;
