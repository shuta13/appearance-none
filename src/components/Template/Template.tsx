// import { Nav } from '../Nav/Nav';
import type { EntryCollection } from 'contentful';
import type { Slug, Metadata } from '../../types/contentful-types';
import { BlogHost, DateNow, DefaultJsonId, OgImageUrl } from '../../config';
import { Day } from '../Day/Day';
import { Tag } from '../Tag/Tag';
import styles from './Template.module.scss';
import { SEO } from '../SEO';
import { generateSnippet } from '../../utils/snippet';
import { ShareButtonContainer } from '../ShareButtonContainer/ShareButtonContainer';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import gfm from 'remark-gfm';
import { TagLinkContainer } from '../TagLinkContainer/TagLinkContainer';

type Props = EntryCollection<Slug>['items'][number] & {
  metadata: Metadata;
  prevSlug: string;
  nextSlug: string;
};

const Article: React.FC<Props> = (props) => {
  const { metadata, fields, sys, prevSlug, nextSlug } = props;
  return (
    <article className={styles.wrap}>
      <Day sys={sys} />
      <h1 className={styles.title}>{fields.title}</h1>
      <TagLinkContainer metadata={metadata} />
      <ReactMarkdown
        allowDangerousHtml={true}
        className={styles.blog_article}
        plugins={[gfm]}
        renderers={{
          link: (props) => {
            if (props.href?.match('http')) {
              return (
                <a
                  href={props.href}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  {props.children}
                </a>
              );
            }
            return <a href={props.href}>{props.children}</a>;
          },
          code: ({ language, value }) => {
            return (
              <SyntaxHighlighter
                style={tomorrow}
                language={language}
                children={value}
              />
            );
          },
        }}
      >
        {fields.body}
      </ReactMarkdown>
      <ShareButtonContainer title={fields.title} slug={fields.slug} />
    </article>
  );
};

export const Template: React.FC<Props> = (props) => {
  const { fields } = props;

  const title = fields.title;
  const description = generateSnippet(fields.body);

  const jsonLd: typeof DefaultJsonId = {
    title: title,
    description: description,
    url: BlogHost + `/entry/${fields.slug}`,
    imageUrl: OgImageUrl,
    updated: DateNow,
  };

  return (
    <>
      <SEO title={title} description={description} propsJsonLd={jsonLd} />
      <Article {...props} />
    </>
  );
};
