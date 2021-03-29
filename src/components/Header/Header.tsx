import Link from 'next/link';
import { BlogDescription, BlogTitle } from '../../config';
import styles from './Header.module.scss';

export const Header: React.FC = () => (
  <header className={styles.wrap}>
    <h1>
      <Link href="/">
        <a className={styles.text}>{BlogTitle}</a>
      </Link>
    </h1>
  </header>
);
