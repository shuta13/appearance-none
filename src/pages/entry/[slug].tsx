import { EntryCollection } from 'contentful';
import { Template } from '../../components/Template';
import { useRouter } from 'next/router';
import type { Metadata, Slug } from '../../types/contentful-types';
import ErrorPage from '../../pages/_error';
import { Nav } from '../../components/Nav';
import { getBlogPost } from '../../utils/contentful-client';

type Props = {
  entries: EntryCollection<Slug> | undefined;
  entryItems:
    | {
        slug: string;
        title: string;
      }[]
    | undefined;
};

// export const config = {
//   unstable_runtimeJS: false,
// };

const BlogPost: React.FC<Props> = (props) => {
  const { entries, entryItems } = props;
  const router = useRouter();
  const { slug } = router.query;

  if (!entries) return <ErrorPage statusCode={404} message="not found" />;

  const article = entries.items.reduce((prev, cur) => {
    if (cur.fields.slug === slug) return cur;
    return prev;
  });
  const articleIndex = entries.items.indexOf(article);

  const prevArticle =
    articleIndex !== -1 && articleIndex < entries.items.length - 1
      ? entries.items[articleIndex + 1]
      : null;

  const nextArticle =
    articleIndex !== -1 && articleIndex > 0
      ? entries.items[articleIndex - 1]
      : null;

  if (!article || !article?.sys.id || !entryItems)
    return <ErrorPage statusCode={404} message="not found" />;

  return (
    <>
      <Template
        {...article}
        // @ts-ignore
        metadata={(article as unknown as { metadata: Metadata }).metadata}
      />
      <Nav prevArticle={prevArticle} nextArticle={nextArticle} />
    </>
  );
};

export const getStaticProps = async () => {
  const entries = await getBlogPost();

  const entryItems = entries?.items.map((item) => {
    return {
      slug: item.fields.slug,
      title: item.fields.title,
    };
  });

  if (entries != null) {
    return { props: { entries, entryItems } };
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
    return { paths, fallback: false };
  } else throw new Error();
};

export default BlogPost;
