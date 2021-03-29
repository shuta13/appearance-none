import type { EntryCollection } from 'contentful';
import type { Slug, Metadata } from '../../types/contentful-types';
import {
  BlogHost,
  BlogTitle,
  DateNow,
  DefaultJsonId,
  OgImageUrl,
} from '../../config';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import { useEffect } from 'react';
import { Day } from '../Day/Day';
import { Nav } from '../Nav/Nav';
import { Tag } from '../Tag/Tag';
import styles from './Template.module.scss';
import { SEO } from '../SEO';
import { generateSnippet } from '../../utils/snippet';
import { ShareButtonContainer } from '../ShareButtonContainer/ShareButtonContainer';
import Head from 'next/head';

type Props = EntryCollection<Slug>['items'][number] & {
  metadata: Metadata;
  prevSlug: string;
  nextSlug: string;
  widgetsJs: string;
};

const md = new MarkdownIt({
  html: true,
  linkify: false,
});

const Article: React.FC<Props> = (props) => {
  const { metadata, fields, sys, prevSlug, nextSlug } = props;
  return (
    <section className={styles.wrap}>
      <Day sys={sys} />
      <h1 className={styles.title}>{fields.title}</h1>
      {metadata.tags.map((tag, i) => (
        <Tag tagName={tag.sys.id} key={i} />
      ))}
      <article
        dangerouslySetInnerHTML={{ __html: md.render(fields.body) }}
        className={styles.blog_article}
      />
      <Nav prevSlug={prevSlug} nextSlug={nextSlug} />
      <ShareButtonContainer title={fields.title} slug={fields.slug} />
    </section>
  );
};

export const Template: React.FC<Props> = (props) => {
  const { fields, widgetsJs } = props;

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
        <script type="text/javascript" charSet="utf-8">
          {widgetsJs}
        </script>
      </Head>
      <Article {...props} />
    </>
  );
};
