import type { Slug } from '../../types/contentful-types';
import {
  HatenaIcon,
  HatenaShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { BlogHost, BlogTitle } from '../../config';
import styles from './ShareButtonContainer.module.scss';
import * as gtag from '../../utils/gtag';

type Props = Omit<Slug, 'body'>;

export const ShareButtonContainer: React.FC<Props> = (props) => {
  const { title, slug } = props;
  return (
    <p className={styles.wrap}>
      <TwitterShareButton
        url={`${BlogHost}/entry/${slug}`}
        title={`${title} | ${BlogTitle}`}
        className={styles.box}
        onClick={(e) => {
          e.preventDefault();

          gtag.event('share', {
            event_category: 'Twitter',
            event_label: 'Share',
          });
        }}
      >
        <TwitterIcon size={48} borderRadius={8} />
      </TwitterShareButton>
      <HatenaShareButton
        url={`${BlogHost}/entry/${slug}`}
        className={styles.box}
        onClick={(e) => {
          e.preventDefault();

          gtag.event('share', {
            event_category: 'Hatena',
            event_label: 'BookMark',
          });
        }}
      >
        <HatenaIcon size={48} borderRadius={8} />
      </HatenaShareButton>
    </p>
  );
};
