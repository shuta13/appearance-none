import type { InferGetStaticPropsType } from 'next';
import { Card } from '../components/Card';
import { SocialButtonContainer } from '../components/SocialButtonContainer';
import { SEO } from '../components/SEO';
import { getBlogData } from '~/usecases/getBlogData';

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
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

export const getStaticProps = async () => {
  const data = await getBlogData();

  if (data != null) {
    return { props: { data } };
  } else throw new Error();
};

export default Home;
