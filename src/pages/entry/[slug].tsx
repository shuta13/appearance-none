import { EntryCollection } from 'contentful';
import { Template } from '../../components/Template';
import { useRouter } from 'next/router';
import type { Metadata, Slug } from '../../types/contentful-types';
import ErrorPage from '../../pages/_error';
import { useEffect, useState } from 'react';
import { Nav } from '../../components/Nav';
import { getBlogPost } from '../../utils/contentful-client';

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
            index;
            navData;
            setNextSlug(navData[index - 1].slug);
            setNextTitle(navData[index - 1].title);
          } else {
            setNextSlug('');
            setNextTitle('');
          }
        }
      });
    }
  }, [slug]);

  useEffect(() => {
    const bookmarkButtonScript = document.createElement('script');
    bookmarkButtonScript.src = 'https://b.st-hatena.com/js/bookmark_button.js';
    document.body.appendChild(bookmarkButtonScript);

    const widgetsScript = document.createElement('script');
    widgetsScript.src = 'https://platform.twitter.com/widgets.js';
    document.body.appendChild(widgetsScript);

    return () => {
      document.body.removeChild(bookmarkButtonScript);
      document.body.removeChild(widgetsScript);
    };
  }, [router]);

  const article = entries?.items.reduce((prev, cur) => {
    if (cur.fields.slug === slug) return cur;
    return prev;
  });

  if (!article || !article?.sys.id)
    return <ErrorPage statusCode={404} message="not found" />;

  return (
    <>
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
  const entries = await getBlogPost();

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
  const entries = await getBlogPost();

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
