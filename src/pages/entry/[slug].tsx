import { createClient, EntryCollection } from 'contentful';
import { Template } from '../../components/Template';
import { useRouter } from 'next/router';
import type { Metadata, Slug } from '../../types/contentful-types';
import Head from 'next/head';
import ErrorPage from '../../pages/_error';
import { useEffect, useState } from 'react';
import { Nav } from '../../components/Nav';

type Props = {
  entries: EntryCollection<Slug> | undefined;
  navData:
    | {
        slug: string;
        title: string;
      }[]
    | undefined;
};

const BlogPost: React.FC<Props> = (props) => {
  const { entries, navData } = props;
  const router = useRouter();
  const { slug } = router.query;

  const [prevSlug, setPrevSlug] = useState('');
  const [prevTitle, setPrevTitle] = useState('');
  const [nextSlug, setNextSlug] = useState('');
  const [nextTitle, setNextTitle] = useState('');

  useEffect(() => {
    if (typeof slug === 'string' && navData != null) {
      navData.forEach((data, index) => {
        if (data.slug === slug) {
          if (index < navData.length - 1) {
            setPrevSlug(navData[index + 1].slug);
            setPrevTitle(navData[index + 1].title);
          } else {
            setPrevSlug('');
            setPrevTitle('');
          }

          if (index > 0) {
            console.log(index);
            console.log(navData);
            setNextSlug(navData[index - 1].slug);
            setNextTitle(navData[index - 1].title);
          } else {
            setNextSlug('');
            setNextTitle('');
          }
        }
      });
      // if (navData.indexOf(slug) < slugNames.length) {
      //   setPrevSlug(slugNames[slugNames.indexOf(slug) + 1]);
      // }

      // if (slugNames.indexOf(slug) > 0) {
      //   setNextSlug(slugNames[slugNames.indexOf(slug) - 1]);
      // }
    }
  }, [slug]);

  const article = entries?.items.reduce((prev, cur) => {
    if (cur.fields.slug === slug) return cur;
    return prev;
  });

  if (!article || !article?.sys.id)
    return <ErrorPage statusCode={404} message="not found" />;

  return (
    <>
      <Head>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </Head>
      <Template
        {...article}
        metadata={((article as unknown) as { metadata: Metadata }).metadata}
      />
      <Nav
        prevSlug={prevSlug}
        nextSlug={nextSlug}
        prevTitle={prevTitle}
        nextTitle={nextTitle}
      />
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
  const entries = (await client.getEntries<Slug>()) as
    | EntryCollection<Slug>
    | undefined;

  const navData = entries?.items.map((item) => {
    return {
      slug: item.fields.slug,
      title: item.fields.title,
    };
  });

  if (entries != null) {
    return { props: { entries, navData }, revalidate: 60 };
  }
};

export const getStaticPaths = async () => {
  const spaceId = process.env.SPACE_ID!;
  const accessToken = process.env.DELIVERY_KEY!;
  const client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });
  const entries = await client.getEntries<Slug>();

  if (entries != null) {
    const paths = entries.items.map((item) => ({
      params: {
        slug: item.fields.slug,
      },
    }));
    return { paths, fallback: true };
  } else throw new Error();
};

export default BlogPost;
