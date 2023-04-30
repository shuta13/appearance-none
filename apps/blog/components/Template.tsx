import { BlogHost, DateNow, DefaultJsonId, OgImageUrl } from '~/config';
import { Day } from './Day';
import { SEO } from './SEO';
import { ShareButtonContainer } from './ShareButtonContainer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ToC } from './ToC';
import { useRef } from 'react';
import { Articles } from '~/repositories/article';
import { NotionRenderer } from 'react-notion-x';

declare global {
  interface Window {
    twttr: any;
  }
}

export const Template: React.FC<Articles[number]> = (props) => {
  const { head, body } = props;

  const title = head.title;

  const jsonLd: typeof DefaultJsonId = {
    title: title,
    description: title,
    url: BlogHost + `/entry/${head.slug}`,
    imageUrl: OgImageUrl,
    updated: DateNow,
  };

  const articleRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <SEO title={title} description={title} linkedData={jsonLd} />
      <article ref={articleRef} className="space-y-10">
        <div className="space-y-4">
          <Day head={head} />
          <h1>{head.title}</h1>
        </div>
        <ToC body={body} />
        <div
          className="template"
          dangerouslySetInnerHTML={{
            __html: body.map((article) => article.htmlStr).join(''),
          }}
        />
        <ShareButtonContainer />
      </article>
    </>
  );
};
