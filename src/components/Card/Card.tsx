import type { EntryCollection } from 'contentful';
import type { Metadata, Slug } from '../../types/contentful-types';
import Link from 'next/link';
import { Day } from '../Day/Day';
import removeMd from 'remove-markdown';
import styles from './Card.module.scss';

type Props = { item: EntryCollection<Slug>['items'][number] } & {
  metadata: Metadata;
};

const Snippet: React.FC<{ text: string }> = (props) => {
  const { text } = props;
  const limit = 160;
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: text.length > limit ? text.substr(0, limit) + '...' : text,
      }}
      className={styles.snippet}
    />
  );
};

export const Card: React.FC<Props> = (props) => {
  const { item, metadata } = props;
  const text = removeMd(item.fields.body);
  return (
    <div className={styles.wrap}>
      <Link href={`/entry/${item.fields.slug}`}>
        <a className={styles.box}>
          <Day sys={item.sys} />
          <h2 className={styles.title}>{item.fields.title}</h2>
          <Snippet text={text} />
        </a>
      </Link>
    </div>
  );
};
