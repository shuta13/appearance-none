import Image from 'next/image';
import styles from './PreviewImage.module.scss';

type Props = {
  src: string;
  alt: string;
  onClick: () => void;
  width?: number;
  height?: number;
};

export const PreviewImage: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  onClick,
}) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.image}
      />
      <button
        onClick={onClick}
        className={styles.clase_button}
        autoFocus={true}
      >
        Close
      </button>
    </div>
  );
};
