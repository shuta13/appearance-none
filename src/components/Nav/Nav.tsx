import Link from 'next/link';
import { generateSnippet } from '../../utils/snippet';
import styles from './Nav.module.scss';

export const Nav: React.FC<{
  prevSlug: string;
  nextSlug: string;
  prevTitle: string;
  nextTitle: string;
}> = (props) => {
  const { prevSlug, nextSlug, prevTitle, nextTitle } = props;
  return (
    <nav>
      <div className={styles.wrap}>
        <span className={styles.prev}>
          {prevSlug !== '' && (
            <Link href={prevSlug} prefetch={false}>
              <a className={styles.prev_text}>
                {generateSnippet(prevTitle, 20)}
              </a>
            </Link>
          )}
        </span>
        <span className={styles.next}>
          {nextSlug !== '' && (
            <Link href={nextSlug} prefetch={false}>
              <a className={styles.next_text}>
                {generateSnippet(nextTitle, 20)}
              </a>
            </Link>
          )}
        </span>
      </div>
    </nav>
  );
};
