import type { EntryCollection } from 'contentful';
import type { Slug } from '../types/contentful-types';
import Link from 'next/link';
import { Day } from './Day';
import removeMd from 'remove-markdown';

type Props = { item: EntryCollection<Slug>['items'][number] };

const Snippet: React.FC<{ text: string }> = (props) => {
  const { text } = props;
  const limit = 60;
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: text.length > limit ? text.substr(0, limit) + '...' : text,
      }}
    />
  );
};

export const Card: React.FC<Props> = (props) => {
  const { item } = props;
  const text = removeMd(item.fields.body);
  return (
    <>
      <Link href={`/entry/${item.fields.slug}`}>
        <a>{item.fields.title}</a>
      </Link>
      <Day sys={item.sys} />
      <Snippet text={text} />
    </>
  );
};
