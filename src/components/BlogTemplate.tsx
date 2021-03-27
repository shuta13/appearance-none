import type { EntryCollection } from 'contentful';
import type { Slug, Metadata } from '../types/contentful-types';
import { BlogTitle, TagsMap } from '../config';
import Head from 'next/head';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';

type Props = EntryCollection<Slug>['items'][number] & { metadata: Metadata };

dayjs.locale(ja);

const markdown = new MarkdownIt({
  html: true,
  linkify: false,
});

export const BlogTemplate: React.FC<Props> = (props) => {
  const { metadata, fields, sys } = props;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>{`${fields.title} - ${BlogTitle}`}</title>
      </Head>
      <h1>{fields.title}</h1>
      {metadata.tags.map((tag, i) => (
        <p key={i}>{TagsMap[tag.sys.id]}</p>
      ))}
      <p>{dayjs(sys.updatedAt).format('YYYY年M月DD日')}</p>
      <article
        dangerouslySetInnerHTML={{ __html: markdown.render(fields.body) }}
      />
    </>
  );
};
