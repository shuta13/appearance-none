import type { EntryCollection } from 'contentful';
import type { Metadata, Slug } from '../../types/contentful-types';
import Link from 'next/link';
import { Day } from '../Day';
import styles from './Card.module.scss';
import { generateSnippet } from '../../utils/snippet';

type Props = { item: EntryCollection<Slug>['items'][number] } & {
  metadata: Metadata;
};

const Snippet: React.FC<{ body: string }> = (props) => {
  const { body } = props;
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: generateSnippet(body),
      }}
      className={styles.snippet}
    />
  );
};

export const Card: React.FC<Props> = (props) => {
  const { item } = props;
  return (
    <div className={styles.wrap}>
      <Link href={`/entry/${item.fields.slug}`} className={styles.box}>

        <Day sys={item.sys} />
        <h2 className={styles.title}>{item.fields.title}</h2>
        <Snippet body={item.fields.body} />

      </Link>
    </div>
  );
};
