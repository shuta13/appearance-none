import { TagsMap } from '../../config';
import styles from './Tag.module.scss';

export const Tag: React.FC<{ tagName: keyof typeof TagsMap }> = (props) => {
  const { tagName } = props;
  return <p className={styles.wrap}>#{TagsMap[tagName]}</p>;
};
