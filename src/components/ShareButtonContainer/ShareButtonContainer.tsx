import type { Slug } from '../../types/contentful-types';
import styles from './ShareButtonContainer.module.scss';

type Props = Omit<Slug, 'body'>;

export const ShareButtonContainer: React.FC<Props> = (props) => {
  return (
    <p className={styles.wrap}>
      <span className={styles.box}>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-show-count="false"
          style={{ outline: 'none' }}
        >
          Tweet
        </a>
      </span>
      <span className={styles.box}>
        <a
          href="https://b.hatena.ne.jp/entry/"
          className="hatena-bookmark-button"
          data-hatena-bookmark-layout="basic-label"
          data-hatena-bookmark-lang="ja"
          title="このエントリーをはてなブックマークに追加"
        >
          <img
            src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
            alt="このエントリーをはてなブックマークに追加"
            width="20"
            height="20"
            style={{ border: 'none' }}
          />
        </a>
      </span>
    </p>
  );
};
