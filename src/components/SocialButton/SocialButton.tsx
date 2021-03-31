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
      <a rel="nofollow noreferrer noopener" target="_blank">
        <FontAwesomeIcon icon={icon} className={styles.icon} size="2x" />
      </a>
    </Link>
  );
};
