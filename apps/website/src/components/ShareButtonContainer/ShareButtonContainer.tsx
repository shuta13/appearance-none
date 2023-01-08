import Image from 'next/image';
import styles from './ShareButtonContainer.module.scss';
import { useMount } from 'utils/hooks';

export const ShareButtonContainer: React.FC = () => {
  const { mounted } = useMount();
  return (
    <div className={styles.wrap}>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-show-count="false"
        style={{ outline: 'none' }}
      >
        Tweet
      </a>
      {mounted && (
        <a
          href="https://b.hatena.ne.jp/entry/"
          className="hatena-bookmark-button"
          data-hatena-bookmark-layout="basic-label"
          data-hatena-bookmark-lang="ja"
          title="このエントリーをはてなブックマークに追加"
        >
          <Image
            src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
            alt="このエントリーをはてなブックマークに追加"
            width="20"
            height="20"
            style={{ border: 'none' }}
          />
        </a>
      )}
    </div>
  );
};
