import { Entries } from '~/usecases/getBlogData';
import { Tag } from '../Tag';
import styles from './TagLinkContainer.module.scss';

export const TagLinkContainer: React.FC<{ head: Entries[number]['head'] }> = ({
  head: { tags },
}) => {
  return (
    <>
      {tags.map((tag) => (
        <span className={styles.wrap} key={tag}>
          <Tag tagName={tag} />
        </span>
      ))}
    </>
  );
};
