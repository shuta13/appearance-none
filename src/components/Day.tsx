import { Sys } from 'contentful';
import dayjs from 'dayjs';

type Props = { sys: Sys };

export const Day: React.FC<Props> = (props) => {
  const { sys } = props;
  return <p>{dayjs(sys.createdAt).format('YYYY/MM/DD')}</p>;
};
