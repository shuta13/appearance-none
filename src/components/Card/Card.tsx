import Link from 'next/link';
import { Day } from '../Day';
import styles from './Card.module.scss';
import { maskString } from '~/utils/maskString';
import { Entries } from '~/usecases/getBlogData';

const Snippet: React.FC<{ body: string }> = (props) => {
  const { body } = props;
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: maskString(body),
      }}
      className={styles.snippet}
    />
  );
};

export const Card: React.FC<Entries[number]> = ({ head, body }) => {
  return (
    <div className={styles.wrap}>
      <Link href={`/entry/${head.slug}`} className={styles.box}>
        <Day head={head} />
        <h2 className={styles.title}>{head.title}</h2>
        <Snippet body={body.content.toString()} /** @todo */ />
      </Link>
    </div>
  );
};
