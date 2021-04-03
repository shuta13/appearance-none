import { createClient } from 'contentful';
import type { InferGetStaticPropsType } from 'next';
import type { Metadata, Slug } from '../types/contentful-types';
import { Card } from '../components/Card/Card';
import { SocialButtonContainer } from '../components/SocialButtonContainer/SocialButtonContainer';
import { SEO } from '../components/SEO';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const config = {
  unstable_runtimeJS: false,
};

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
  const spaceId = process.env.SPACE_ID!;
  const accessToken = process.env.DELIVERY_KEY!;
  const client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });

  const entries = await client.getEntries<Slug>();

  if (entries != null) {
    return { props: { entries }, revalidate: 1 };
  } else throw new Error();
};

export default Home;
