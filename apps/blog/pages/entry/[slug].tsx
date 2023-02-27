import { Template } from '~/components/Template';
import { Nav } from '~/components/Nav';
import { getArticles } from '~/usecases/getArticles';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { NextPageWithLayout } from '../_app';
import { getBaseLayout } from '~/components/Layouts/BaseLayout';

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const data = await getArticles().invoke();

  const entry = data.find((d) => d.head.slug === context.params?.slug)!;
  const currentIndex = data.indexOf(entry);
  const prevEntry =
    currentIndex !== -1 && currentIndex < data.length - 1
      ? data[currentIndex + 1]
      : null;
  const nextEntry =
    currentIndex !== -1 && currentIndex > 0 ? data[currentIndex - 1] : null;

  if (entry != null) {
    return { props: { entry, prevEntry, nextEntry } };
  } else {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths = async () => {
  const data = await getArticles().invoke();

  if (data != null) {
    const paths = data.map((d) => ({
      params: {
        slug: d.head.slug,
      },
    }));
    return {
      paths,
      fallback: false,
    };
  } else {
    throw new Error();
  }
};

const Slug: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> =
  (props) => {
    const { entry, prevEntry, nextEntry } = props;

    return (
      <>
        <Template {...entry} />
        <Nav prevEntry={prevEntry} nextEntry={nextEntry} />
      </>
    );
  };

Slug.getLayout = getBaseLayout;

export default Slug;
