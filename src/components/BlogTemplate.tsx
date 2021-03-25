import type { EntryCollection } from 'contentful';
import type { Slug, Metadata } from '../types/Contentful';

type Props = EntryCollection<Slug>['items'][number] & { metadata: Metadata };

export const BlogTemplate: React.FC<Props> = (props) => {
  const { metadata, fields } = props;
  /**
   * FIXME: 関数で body を html 化
   */
  console.log(fields);
  return (
    <>
      <h1>{fields.title}</h1>
      {metadata.tags.map((tag, i) => (
        <p key={i}>{tag.sys.id}</p>
      ))}
      <article>{``}</article>
    </>
  );
};
