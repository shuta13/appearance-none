import type { Metadata } from '../../types/contentful-types';
import { Tag } from '../Tag/Tag';
import styles from './TagLinkContainer.module.scss';

type Props = { metadata: Metadata };

export const TagLinkContainer: React.FC<Props> = (props) => {
  const { metadata } = props;
  return (
    <>
      {metadata.tags.map((tag, i) => (
        <span className={styles.wrap} key={i}>
          <Tag tagName={tag.sys.id} />
        </span>
      ))}
    </>
  );
};
