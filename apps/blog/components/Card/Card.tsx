import Link from 'next/link';
import { Day } from '~/components/Day';
import styles from './Card.module.scss';
import { summarize } from 'utils/str';
import { Articles } from '~/repositories/article';

export const Card: React.FC<Articles[number]> = ({ head, body }) => {
  return (
    <div className={styles.wrap}>
      <Link href={`/entry/${head.slug}`} className={styles.box}>
        <Day head={head} />
        <h2 className={styles.title}>{head.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: summarize(body.map((item) => item.htmlStr).join('')),
          }}
          className={styles.snippet}
        />
      </Link>
    </div>
  );
};
