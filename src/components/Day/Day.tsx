import { Sys } from 'contentful';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import styles from './Day.module.scss';

dayjs.locale(ja);

type Props = { sys: Sys };

export const Day: React.FC<Props> = (props) => {
  const { sys } = props;
  return (
    <p className={styles.wrap}>
      <span>
        <time dateTime={dayjs(sys.createdAt).format('YYYY-MM-DD')}>
          {dayjs(sys.createdAt).format('YYYY/MM/DD')}
        </time>
      </span>
    </p>
  );
};
