import { Sys } from 'contentful';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';

dayjs.locale(ja);

type Props = { sys: Sys };

export const Day: React.FC<Props> = (props) => {
  const { sys } = props;
  return (
    <p>
      <span>
        Published:
        <time dateTime={dayjs(sys.createdAt).format('YYYY-MM-DD')}>
          {dayjs(sys.createdAt).format('YYYY/MM/DD')}
        </time>
      </span>
      <span>
        Updated:
        <time dateTime={dayjs(sys.updatedAt).format('YYYY-MM-DD')}>
          {dayjs(sys.updatedAt).format('YYYY/MM/DD')}
        </time>
      </span>
    </p>
  );
};
