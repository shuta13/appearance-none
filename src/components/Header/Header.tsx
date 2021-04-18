import Link from 'next/link';
import styles from './Header.module.scss';

type Props = { title: string };

export const Header: React.FC<Props> = (props) => (
  <header className={styles.wrap}>
    <h1>
      <Link href="/">
        <img
          alt="Blog Title"
          src={`/images/${props.title}.svg`}
          className={styles.title}
        />
      </Link>
    </h1>
  </header>
);
