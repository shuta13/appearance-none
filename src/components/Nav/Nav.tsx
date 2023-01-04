import type { Entry } from 'contentful';
import Link from 'next/link';
import type { Slug } from '../../types/contentful-types';
import { generateSnippet } from '../../utils/snippet';
import styles from './Nav.module.scss';

export const Nav: React.FC<{
  prevArticle: Entry<Slug> | null;
  nextArticle: Entry<Slug> | null;
}> = (props) => {
  const { prevArticle, nextArticle } = props;
  return (
    <nav>
      <div className={styles.wrap}>
        <span>
          {prevArticle && (
            <Link href={prevArticle.fields.slug}>
              {generateSnippet(prevArticle.fields.title, 20)}
            </Link>
          )}
        </span>
        <span>
          {nextArticle && (
            <Link href={nextArticle.fields.slug}>
              {generateSnippet(nextArticle.fields.title, 20)}
            </Link>
          )}
        </span>
      </div>
    </nav>
  );
};
