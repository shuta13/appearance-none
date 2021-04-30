import Link from 'next/link';
import { generateSnippet } from '../../utils/snippet';

export const Nav: React.FC<{
  prevSlug: string;
  nextSlug: string;
  prevTitle: string;
  nextTitle: string;
}> = (props) => {
  const { prevSlug, nextSlug, prevTitle, nextTitle } = props;
  return (
    <nav>
      <span>
        {prevSlug !== '' && (
          <Link href={prevSlug}>
            <a>Prev: {generateSnippet(prevTitle, 20)}</a>
          </Link>
        )}
      </span>
      <span>
        {nextSlug !== '' && (
          <Link href={nextSlug}>
            <a>Next: {generateSnippet(nextTitle, 20)}</a>
          </Link>
        )}
      </span>
    </nav>
  );
};
