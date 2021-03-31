import Link from 'next/link';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import styles from './SocialButton.module.scss';

type Props = { href: string; icon: FontAwesomeIconProps['icon'] };

export const SocialButton: React.FC<Props> = (props) => {
  const { href, icon } = props;
  return (
    <Link href={href}>
      <a
        rel="nofollow noreferrer noopener"
        target="_blank"
        className={styles.wrap}
      >
        <span className={styles.box}>
          <FontAwesomeIcon
            icon={icon}
            className={styles.icon}
            width={30}
            height={30}
          />
        </span>
      </a>
    </Link>
  );
};
