import type { InferGetStaticPropsType } from 'next';
import { NextPageWithLayout } from './_app';
import { getBaseLayout } from '~/components/Layouts/BaseLayout';
import { SEO } from '~/components/SEO';
import { getArticle } from '~/usecases/getArticle';

export const getStaticProps = async () => {
  const data = await getArticle().invoke({ id: process.env.PAGE_ID || '' });

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
      <article
        dangerouslySetInnerHTML={{
          __html: data.body.map((value) => value.htmlStr).join(''),
        }}
        className="template"
      />
    </>
  );
};

Home.getLayout = getBaseLayout;

export default Home;
