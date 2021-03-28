import type { EntryCollection } from 'contentful';
import type { Slug, Metadata } from '../../types/contentful-types';
import { BlogTitle } from '../../config';
import Head from 'next/head';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import { useEffect } from 'react';
import { Day } from '../Day/Day';
import { Nav } from '../Nav/Nav';
import { Tag } from '../Tag/Tag';

type Props = EntryCollection<Slug>['items'][number] & {
  metadata: Metadata;
  prevSlug: string;
  nextSlug: string;
};

const markdown = new MarkdownIt({
  html: true,
  linkify: false,
});

const Article: React.FC<Props> = (props) => {
  const { metadata, fields, sys, prevSlug, nextSlug } = props;
  return (
    <>
      <h1>{fields.title}</h1>
      {metadata.tags.map((tag, i) => (
        <Tag tagName={tag.sys.id} key={i} />
      ))}
      <Day sys={sys} />
      <article
        dangerouslySetInnerHTML={{ __html: markdown.render(fields.body) }}
      />
      <Nav prevSlug={prevSlug} nextSlug={nextSlug} />
    </>
  );
};

export const Template: React.FC<Props> = (props) => {
  const { fields } = props;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>{`${fields.title} | ${BlogTitle}`}</title>
      </Head>
      <Article {...props} />
    </>
  );
};
