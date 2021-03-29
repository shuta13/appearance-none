import Link from 'next/link';
import styles from './Footer.module.scss';
import Image from 'next/image';

export const Footer: React.FC = () => (
  <footer className={styles.wrap}>
    <div className={styles.icon_wrap}>
      <Image alt="did0es" src="/images/icon.png" width={64} height={64} />
    </div>
    <Link href="https://did0es.me" passHref={true}>
      <a className={styles.text}>© 2021 did0es</a>
    </Link>
  </footer>
);
