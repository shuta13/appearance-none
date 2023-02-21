import Link from 'next/link';
import { summarize } from 'utils/str';
import { Articles } from '~/repositories/article';

const MAX_STRING_LENGTH = 20;

export const Nav: React.FC<{
  prevEntry: Articles[number] | null;
  nextEntry: Articles[number] | null;
}> = ({ prevEntry, nextEntry }) => {
  return (
    <nav>
      <div className="w-full flex place-content-between">
        <span>
          {prevEntry && (
            <Link href={prevEntry.head.slug}>
              {summarize(prevEntry.head.title, MAX_STRING_LENGTH)}
            </Link>
          )}
        </span>
        <span>
          {nextEntry && (
            <Link href={nextEntry.head.slug}>
              {summarize(nextEntry.head.title, MAX_STRING_LENGTH)}
            </Link>
          )}
        </span>
      </div>
    </nav>
  );
};
