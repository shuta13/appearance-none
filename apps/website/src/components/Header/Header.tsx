import Link from 'next/link';
import styles from './Header.module.scss';
import Title from './internal/Title';

export const Header: React.FC = () => (
  <header className={styles.wrap}>
    <Link href="/" className={styles.container}>

      <Title className={styles.title} viewBox="0 0 288 22" />
      <div className={styles.desc}>何も見えない</div>
      <div className={styles.desc}>
        かつてはエンジニアを名乗っていました。
      </div>

    </Link>
  </header>
);
