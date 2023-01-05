import Link from 'next/link';
import { maskString } from '~/utils/maskString';
import styles from './Nav.module.scss';
import { Entries } from '~/usecases/getBlogData';

const MAX_STRING_LENGTH = 20;

export const Nav: React.FC<{
  prevEntry: Entries[number] | null;
  nextEntry: Entries[number] | null;
}> = ({ prevEntry, nextEntry }) => {
  return (
    <nav>
      <div className={styles.wrap}>
        <span>
          {prevEntry && (
            <Link href={prevEntry.head.slug}>
              {maskString(prevEntry.head.title, MAX_STRING_LENGTH)}
            </Link>
          )}
        </span>
        <span>
          {nextEntry && (
            <Link href={nextEntry.head.slug}>
              {maskString(nextEntry.head.title, MAX_STRING_LENGTH)}
            </Link>
          )}
        </span>
      </div>
    </nav>
  );
};
