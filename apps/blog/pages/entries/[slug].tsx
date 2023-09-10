import cn from 'classnames';
import { getArticle } from '~/usecases/getArticle';
import { GetServerSidePropsContext, InferGetStaticPropsType } from 'next';
import { NextPageWithLayout } from '~/pages/_app';
import { getBaseLayout } from '~/components/Layouts/BaseLayout';
import { SEO } from '~/components/SEO';
import { getArticles } from '~/usecases/getArticles';
import { ToC } from '~/components/ToC';
import { useEffect, useRef, useState } from 'react';
import { BlogHost, DateNow, DefaultJsonId, OgImageUrl } from '~/config';
import { Day } from '~/components/Day';
import Image from 'next/image';

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const article = await getArticle().invoke({
    id: context.params?.slug as string,
  });

  if (article != null) {
    return { props: { article } };
  } else {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths = async () => {
  const data = await getArticles().invoke({ tag: 'all' });

  if (data != null) {
    const paths = data.map((article) => ({
      params: {
        tag: article.head.tags[0],
        slug: article.meta.id,
      },
    }));
    return { paths, fallback: false };
  } else {
    throw new Error();
  }
};

const Slug: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  const { article } = props;

  const title = article.head.title;
  const url = BlogHost + `/entry/${article.head.slug}`;

  const jsonLd: typeof DefaultJsonId = {
    title,
    description: title,
    url,
    imageUrl: OgImageUrl,
    updated: DateNow,
  };

  const articleRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <SEO
        title={article.head.title}
        description={article.head.title}
        linkedData={jsonLd}
      />
      <article ref={articleRef} className="space-y-10">
        <div className="space-y-4">
          <Day head={article.head} />
          <h1>{article.head.title}</h1>
        </div>
        <ToC body={article.body} />
        <div
          className="template"
          dangerouslySetInnerHTML={{
            __html: article.body.map((article) => article.htmlStr).join(''),
          }}
        />
        <Share url={url} text={title} />
      </article>
    </>
  );
};

export const Share: React.FC<{
  url: string;
  text: string;
}> = ({ url, text }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="space-y-2">
      <div className="text-14">この記事を共有する</div>
      <div className="flex space-x-4 place-items-center">
        <a
          href={`https://twitter.com/share?url=${url}&text=${text}&via=did0es`}
          className="rounded bg-black w-[40px] h-[40px] p-2"
        >
          <svg
            viewBox="0 0 1200 1227"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
              fill="white"
            />
          </svg>
        </a>
        {/* Hydration Error対策 */}
        {mounted && (
          <a
            href="https://b.hatena.ne.jp/entry/"
            className="hatena-bookmark-button"
            data-hatena-bookmark-layout="touch"
            data-hatena-bookmark-lang="ja"
            title="このエントリーをはてなブックマークに追加"
          >
            <Image
              src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
              alt="このエントリーをはてなブックマークに追加"
              width="20"
              height="20"
              style={{ border: 'none' }}
            />
          </a>
        )}
      </div>
    </div>
  );
};

Slug.getLayout = getBaseLayout;

export default Slug;
