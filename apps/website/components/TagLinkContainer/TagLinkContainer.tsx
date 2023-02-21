import { Articles } from '~/repositories/article';
import { Tag } from '../Tag';
import styles from './TagLinkContainer.module.scss';

export const TagLinkContainer: React.FC<{ head: Articles[number]['head'] }> = ({
  head: { tags },
}) => {
  return (
    <div>
      {tags.map((tag) => (
        <span className={styles.wrap} key={tag}>
          <Tag tagName={tag} />
        </span>
      ))}
    </div>
  );
};
