import { createClient } from 'contentful';
import type { InferGetStaticPropsType } from 'next';
import { BlogTemplate } from '../../components/BlogTemplate';
import { useRouter } from 'next/router';
import type { Metadata, Slug } from '../../types/Contentful';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const BlogPost: React.FC<Props> = (props) => {
  const { items } = props;
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      {items.map(
        (item, i) =>
          item.fields.slug === slug && (
            <BlogTemplate
              key={i}
              metadata={((item as unknown) as { metadata: Metadata }).metadata}
              sys={item.sys}
              fields={item.fields}
              toPlainObject={item.toPlainObject}
              update={item.update}
            />
          )
      )}
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
  if (entries != null) return { props: entries };
  else throw new Error();
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
    return { paths, fallback: false };
  } else throw new Error();
};

export default BlogPost;
