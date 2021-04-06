import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { SocialButton } from '../SocialButton';
import styles from './SocialButtonContainer.module.scss';

export const SocialButtonContainer: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <SocialButton href="https://twitter.com/did0es" icon={faTwitter} />
      <SocialButton href="https://github.com/shuta13" icon={faGithub} />
      <SocialButton href="https://blog.did0es.me/rss.xml" icon={faRss} />
    </div>
  );
};
