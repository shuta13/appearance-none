import type { EntryCollection } from 'contentful';
import type { Slug, Metadata } from '../types/contentful-types';
import { BlogTitle, TagsMap } from '../config';
import Head from 'next/head';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import { useEffect } from 'react';
import { Day } from './Day';

type Props = EntryCollection<Slug>['items'][number] & { metadata: Metadata };

const markdown = new MarkdownIt({
  html: true,
  linkify: false,
});

const Article: React.FC<Props> = (props) => {
  const { metadata, fields, sys } = props;
  return (
    <>
      <h1>{fields.title}</h1>
      {metadata.tags.map((tag, i) => (
        <p key={i}>{TagsMap[tag.sys.id]}</p>
      ))}
      <Day sys={sys} />
      <article
        dangerouslySetInnerHTML={{ __html: markdown.render(fields.body) }}
      />
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
