import Link from 'next/link';

export const Nav: React.FC<{
  prevSlug: string;
  nextSlug: string;
}> = (props) => {
  const { prevSlug, nextSlug } = props;
  return (
    <nav>
      {prevSlug !== '' && (
        <Link href={prevSlug}>
          <a>{prevSlug}</a>
        </Link>
      )}
      {nextSlug !== '' && (
        <Link href={nextSlug}>
          <a>{nextSlug}</a>
        </Link>
      )}
    </nav>
  );
};
