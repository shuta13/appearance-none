import { createClient } from 'contentful';
import type { InferGetStaticPropsType } from 'next';
import type { Metadata, Slug } from '../types/contentful-types';
import { Card } from '../components/Card/Card';
import { generateRss } from '../utils/rss';
import fs from 'fs';
import { SocialButtonContainer } from '../components/SocialButtonContainer/SocialButtonContainer';
import { SEO } from '../components/SEO';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: React.FC<Props> = (props) => {
  const { items } = props;

  return (
    <>
      <SEO />
      {items.map((item, i) => (
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
    const rss = generateRss(entries);
    fs.writeFileSync(process.cwd() + '/public/rss.xml', rss);

    return { props: entries, revalidate: 1 };
  } else throw new Error();
};

export default Home;
