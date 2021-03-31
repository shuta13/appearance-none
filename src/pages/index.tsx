import { createClient } from 'contentful';
import type { InferGetStaticPropsType } from 'next';
import type { Metadata, Slug } from '../types/contentful-types';
import { Card } from '../components/Card/Card';
import { generateRss } from '../utils/rss';
import * as fs from 'fs';
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

  const rss = generateRss(entries);
  await fs.promises.writeFile(process.cwd() + '/public/rss.xml', rss);

  if (entries != null) {
    return { props: entries, revalidate: 1 };
  } else throw new Error();
};

export default Home;
