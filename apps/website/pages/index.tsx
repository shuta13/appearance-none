import type { InferGetStaticPropsType } from 'next';
import { Card } from '~/components/Card';
import { SocialButtonContainer } from '~/components/SocialButtonContainer';
import { SEO } from '~/components/SEO';
import { getArticles } from '~/usecases/getArticles';
import { getBaseLayout } from '~/components/Layouts/BaseLayout';
import { NextPageWithLayout } from './_app';

export const getStaticProps = async () => {
  const data = await getArticles().invoke();

  if (data != null) {
    return { props: { data } };
  } else throw new Error();
};

const Home: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> =
  ({ data }) => {
    return (
      <>
        <SEO />
        {data.map((d, i) => (
          <Card {...d} key={i} />
        ))}
        <SocialButtonContainer />
      </>
    );
  };

Home.getLayout = getBaseLayout;

export default Home;
