import Link from 'next/link';
import { TagsMap } from '../../config';
import styles from './Tag.module.scss';

export const Tag: React.FC<{ tagName: keyof typeof TagsMap }> = (props) => {
  const { tagName } = props;
  return (
    <Link href={`/tags/${tagName}`} prefetch={false}>
      <a className={styles.wrap}>{`#${TagsMap[tagName]}`}</a>
    </Link>
  );
};
