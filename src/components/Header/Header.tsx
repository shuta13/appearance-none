import Link from 'next/link';
import styles from './Header.module.scss';
import Title from './internal/Title';

export const Header: React.FC = () => (
  <header className={styles.wrap}>
    <Link href="/">
      <a>
        <Title className={styles.title} viewBox="0 0 288 22" />
      </a>
    </Link>
  </header>
);
