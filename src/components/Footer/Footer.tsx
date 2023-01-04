import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={styles.wrap}>
    <div className={styles.icon_wrap}>
      {/* <Image alt="did0es" src="/images/icon.svg" width={64} height={64} /> */}
      <img
        alt="did0es"
        src="/images/icon.svg"
        width={64}
        height={64}
        className={styles.icon}
      />
    </div>
    <Link href="https://studio.did0es.me" passHref={true} className={styles.text}>
      © 2021 did0es
    </Link>
  </footer>
);
