import type { EntryCollection } from 'contentful';
import type { Slug, Metadata } from '../../types/contentful-types';
import { BlogHost, DateNow, DefaultJsonId, OgImageUrl } from '../../config';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-tsx.min';
import { useEffect } from 'react';
import { Day } from '../Day/Day';
import { Tag } from '../Tag/Tag';
import styles from './Template.module.scss';
import { SEO } from '../SEO';
import { generateSnippet } from '../../utils/snippet';
import { ShareButtonContainer } from '../ShareButtonContainer/ShareButtonContainer';
// import { Nav } from '../Nav/Nav';
import Head from 'next/head';
import * as commonmark from 'commonmark';

type Props = EntryCollection<Slug>['items'][number] & {
  metadata: Metadata;
  prevSlug: string;
  nextSlug: string;
};

const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer();

const Article: React.FC<Props> = (props) => {
  const { metadata, fields, sys, prevSlug, nextSlug } = props;
  return (
    <article className={styles.wrap}>
      <Day sys={sys} />
      <h1 className={styles.title}>{fields.title}</h1>
      {metadata.tags.map((tag, i) => (
        <Tag tagName={tag.sys.id} key={i} />
      ))}
      <div
        className={styles.blog_article}
        dangerouslySetInnerHTML={{
          __html: writer.render(reader.parse(fields.body)),
        }}
      />
      <ShareButtonContainer title={fields.title} slug={fields.slug} />
    </article>
  );
};

export const Template: React.FC<Props> = (props) => {
  const { fields } = props;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

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
      <Head>
        <script async src="/widgets.js" />
      </Head>
      <Article {...props} />
    </>
  );
};
