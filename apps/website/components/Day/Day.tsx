import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import { Articles } from '~/repositories/article';
import styles from './Day.module.scss';

dayjs.locale(ja);

export const Day: React.FC<{ head: Articles[number]['head'] }> = ({
  head: { created },
}) => {
  return (
    <p className={styles.wrap}>
      <time dateTime={dayjs(created).format('YYYY-MM-DD')}>
        {dayjs(created).format('YYYY/MM/DD')}
      </time>
    </p>
  );
};
