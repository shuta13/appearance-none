import { createClient } from 'contentful';
import type { InferGetStaticPropsType } from 'next';
import { Template } from '../../components/Template/Template';
import { useRouter } from 'next/router';
import type { Metadata, Slug } from '../../types/contentful-types';
import fs from 'fs';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const BlogPost: React.FC<Props> = (props) => {
  const { items } = props;
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      {items?.map(
        (item, i) =>
          item.fields.slug === slug && (
            <Template
              key={i}
              {...item}
              metadata={((item as unknown) as { metadata: Metadata }).metadata}
              prevSlug={items[i - 1]?.fields.slug ?? ''}
              nextSlug={items[i + 1]?.fields.slug ?? ''}
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
  if (entries != null) {
    /**
     * tweet embed
     */
    const res = await fetch('https://platform.twitter.com/widgets.js');
    const widgetsJs = await res.text();
    fs.writeFileSync(process.cwd() + '/public/widgets.js', widgetsJs);
    return { props: { ...entries }, revalidate: 60 };
  } else throw new Error();
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
