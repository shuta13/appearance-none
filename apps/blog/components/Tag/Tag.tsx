import Link from 'next/link';
import styles from './Tag.module.scss';

export const Tag: React.FC<{ tagName: string }> = ({ tagName }) => {
  return (
    <Link href={`/tags/${tagName}`} className={styles.wrap}>
      #{tagName}
    </Link>
  );
};
