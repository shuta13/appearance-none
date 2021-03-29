import Head from 'next/head';
import { createClient } from 'contentful';
import type { InferGetStaticPropsType } from 'next';
import type { Metadata, Slug } from '../types/contentful-types';
import { BlogTitle } from '../config';
import { Card } from '../components/Card/Card';
import { generateRss } from '../utils/rss';
import fs from 'fs';
import { SocialButton } from '../components/SocialButton/SocialButton';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: React.FC<Props> = (props) => {
  const { items } = props;

  return (
    <>
      <Head>
        <title>{BlogTitle}</title>
      </Head>
      {items.map((item, i) => (
        <Card
          item={item}
          key={i}
          metadata={((item as unknown) as { metadata: Metadata }).metadata}
        />
      ))}
      {/* FIXME: split */}
      <div style={{ textAlign: 'center', marginTop: '4em' }}>
        <SocialButton href="https://twitter.com/did0es" icon={faTwitter} />
        <SocialButton href="https://github.com/shuta13" icon={faGithub} />
        <SocialButton href="/rss.xml" icon={faRss} />
      </div>
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

    return { props: entries };
  } else throw new Error();
};

export default Home;
