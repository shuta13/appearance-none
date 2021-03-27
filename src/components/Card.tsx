import type { EntryCollection } from 'contentful';
import type { Slug } from '../types/contentful-types';
import Link from 'next/link';
import { Day } from './Day';

type Props = { item: EntryCollection<Slug>['items'][number] };

export const Card: React.FC<Props> = (props) => {
  const { item } = props;
  return (
    <>
      <Link href={`/entry/${item.fields.slug}`}>
        <a>{item.fields.title}</a>
      </Link>
      <Day sys={item.sys} />
    </>
  );
};
