import type { EntryCollection } from 'contentful';
import type { Slug, Metadata } from '../types/contentful-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BlogTitle, TagsMap } from '../config';
import Head from 'next/head';

type Props = EntryCollection<Slug>['items'][number] & { metadata: Metadata };

export const BlogTemplate: React.FC<Props> = (props) => {
  const { metadata, fields } = props;
  return (
    <>
      <Head>
        <title>{`${fields.title} - ${BlogTitle}`}</title>
      </Head>
      <h1>{fields.title}</h1>
      {metadata.tags.map((tag, i) => (
        <p key={i}>{TagsMap[tag.sys.id]}</p>
      ))}
      <article>{documentToReactComponents(fields.body)}</article>
    </>
  );
};
