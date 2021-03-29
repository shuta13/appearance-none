import type { Slug } from '../../types/contentful-types';
import {
  HatenaIcon,
  HatenaShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { BlogHost, BlogTitle } from '../../config';
import styles from './ShareButtonContainer.module.scss';

type Props = Omit<Slug, 'body'>;

export const ShareButtonContainer: React.FC<Props> = (props) => {
  const { title, slug } = props;
  return (
    <p className={styles.wrap}>
      <span className={styles.box}>
        <TwitterShareButton
          url={`${BlogHost}/entry/${slug}`}
          title={`${title} | ${BlogTitle}`}
        >
          <TwitterIcon size="2rem" borderRadius={8} />
        </TwitterShareButton>
      </span>
      <span className={styles.box}>
        <HatenaShareButton url={`${BlogHost}/entry/${slug}`}>
          <HatenaIcon size="2rem" borderRadius={8} />
        </HatenaShareButton>
      </span>
    </p>
  );
};
