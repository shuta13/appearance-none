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
        <span>
          {prevSlug !== '' && (
            <Link href={prevSlug}>
              <a>{generateSnippet(prevTitle, 20)}</a>
            </Link>
          )}
        </span>
        <span>
          {nextSlug !== '' && (
            <Link href={nextSlug}>
              <a>{generateSnippet(nextTitle, 20)}</a>
            </Link>
          )}
        </span>
      </div>
    </nav>
  );
};
