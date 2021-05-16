import type { Metadata } from '../../types/contentful-types';
import { Tag } from '../Tag';
import styles from './TagLinkContainer.module.scss';

type Props = { metadata: Metadata };

export const TagLinkContainer: React.FC<Props> = (props) => {
  const { metadata } = props;
  console.log(metadata);
  return (
    <>
      {metadata.tags.map((tag) => (
        <span className={styles.wrap} key={tag.sys.id}>
          <Tag tagName={tag.sys.id} />
        </span>
      ))}
    </>
  );
};
