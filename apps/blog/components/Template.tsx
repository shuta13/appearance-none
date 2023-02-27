import { BlogHost, DateNow, DefaultJsonId, OgImageUrl } from '~/config';
import { Day } from './Day';
import { SEO } from './SEO';
import { summarize } from 'utils/str';
import { ShareButtonContainer } from './ShareButtonContainer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { TagLinkContainer } from './TagLinkContainer';
import { ToC } from './ToC';
import { Fragment, useRef } from 'react';
import { Articles } from '~/repositories/article';
import { renderer } from 'utils/notion-block-renderer';

declare global {
  interface Window {
    twttr: any;
  }
}

export const Template: React.FC<Articles[number]> = (props) => {
  const { head, body } = props;

  const html = body.map((body) => body.htmlStr).join('');
  const title = head.title;
  const description = summarize(html);

  const jsonLd: typeof DefaultJsonId = {
    title: title,
    description: description,
    url: BlogHost + `/entry/${head.slug}`,
    imageUrl: OgImageUrl,
    updated: DateNow,
  };

  const articleRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <SEO title={title} description={description} propsJsonLd={jsonLd} />
      <article className="space-y-20" ref={articleRef}>
        <div className="space-y-4 mt-8">
          <Day head={head} />
          <h1>{head.title}</h1>
          <TagLinkContainer head={head} />
        </div>
        <ToC body={body} />
        <div className="template">
          {body.map(
            (article, index) =>
              article.content !== null && (
                <Fragment key={index}>{renderer(article.content)}</Fragment>
              )
          )}
        </div>
        <ShareButtonContainer />
      </article>
    </>
  );
};
