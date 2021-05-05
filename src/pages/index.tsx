import type { InferGetStaticPropsType } from 'next';
import type { Metadata } from '../types/contentful-types';
import { Card } from '../components/Card';
import { SocialButtonContainer } from '../components/SocialButtonContainer';
import { SEO } from '../components/SEO';
import { getBlogPost } from '../utils/contentful-client';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: React.FC<Props> = (props) => {
  const { entries } = props;

  return (
    <>
      <SEO />
      {entries.items.map((item, i) => (
        <Card
          item={item}
          key={i}
          metadata={((item as unknown) as { metadata: Metadata }).metadata}
        />
      ))}
      <SocialButtonContainer />
    </>
  );
};

export const getStaticProps = async () => {
  const entries = await getBlogPost();

  if (entries != null) {
    return { props: { entries }, revalidate: 60 };
  } else throw new Error();
};

export default Home;
