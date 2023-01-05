import Link from 'next/link';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import styles from './SocialButton.module.scss';
import { useMount } from '~/utils/hooks';

type Props = { href: string; icon: FontAwesomeIconProps['icon'] };

export const SocialButton: React.FC<Props> = (props) => {
  const { href, icon } = props;
  const { mounted } = useMount();
  if (!mounted) return null;
  return (
    <Link
      href={href}
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
          title={href}
        />
      </span>
    </Link>
  );
};
