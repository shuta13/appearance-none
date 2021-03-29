import { Sys } from 'contentful';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import styles from './Day.module.scss';

dayjs.locale(ja);

type Props = { sys: Sys };

export const Day: React.FC<Props> = (props) => {
  const { sys } = props;
  return (
    <p>
      <span>
        <time
          dateTime={dayjs(sys.updatedAt).format('YYYY-MM-DD')}
          className={styles.text}
        >
          {dayjs(sys.updatedAt).format('YYYY/MM/DD')}
        </time>
      </span>
    </p>
  );
};
