import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={styles.wrap}>
    <Link href="https://did0es.me" passHref={true}>
      <a className={styles.text}>© 2021 did0es</a>
    </Link>
  </footer>
);
