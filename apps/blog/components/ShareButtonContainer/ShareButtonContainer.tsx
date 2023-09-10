import cn from 'classnames';
import Image from 'next/image';

export const ShareButtonContainer: React.FC<{
  url: string;
  text: string;
  className?: string;
}> = ({ url, text, className }) => {
  return (
    <div className={cn('flex space-x-4', className)}>
      <a
        href={`https://twitter.com/share?url=${url}&text=${text}&via=https://blog.did0es.me`}
        className="twitter-share-button"
        data-show-count="false"
        style={{ outline: 'none' }}
      >
        <svg
          className="w-[20px] h-[20px]"
          viewBox="0 0 1200 1227"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
            fill="white"
          />
        </svg>
      </a>
      <a
        href="https://b.hatena.ne.jp/entry/"
        className="hatena-bookmark-button"
        data-hatena-bookmark-layout="touch"
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
    </div>
  );
};
