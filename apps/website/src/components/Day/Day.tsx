import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import { Entries } from '~/usecases/getBlogData';
import styles from './Day.module.scss';

dayjs.locale(ja);

export const Day: React.FC<{ head: Entries[number]['head'] }> = ({
  head: { created },
}) => {
  return (
    <p className={styles.wrap}>
      <span>
        <time dateTime={dayjs(created).format('YYYY-MM-DD')}>
          {dayjs(created).format('YYYY/MM/DD')}
        </time>
      </span>
    </p>
  );
};
