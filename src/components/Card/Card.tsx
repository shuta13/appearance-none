import type { EntryCollection } from 'contentful';
import type { Metadata, Slug } from '../../types/contentful-types';
import Link from 'next/link';
import { Day } from '../Day/Day';
import removeMd from 'remove-markdown';
import { Tag } from '../Tag/Tag';
import styles from './Card.module.scss';

type Props = { item: EntryCollection<Slug>['items'][number] } & {
  metadata: Metadata;
};

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
  const { item, metadata } = props;
  const text = removeMd(item.fields.body);
  return (
    <div className={styles.wrap}>
      <Link href={`/entry/${item.fields.slug}`}>
        <a>{item.fields.title}</a>
      </Link>
      {metadata.tags.map((tag, i) => (
        <Tag tagName={tag.sys.id} key={i} />
      ))}
      <Day sys={item.sys} />
      <Snippet text={text} />
    </div>
  );
};
