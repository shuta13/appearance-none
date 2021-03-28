import { TagsMap } from '../config';

export const Tag: React.FC<{ tagName: keyof typeof TagsMap }> = (props) => {
  const { tagName } = props;
  return <p>{TagsMap[tagName]}</p>;
};
