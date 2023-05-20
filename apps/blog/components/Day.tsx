import { Articles } from '~/repositories/article';
import { d } from 'utils/date';

export const Day: React.FC<{
  head: Articles[number]['head'];
  className?: string;
}> = ({ head: { created }, className }) => {
  return (
    <p className={className}>
      <time dateTime={d(created).format('YYYY-MM-DD')}>
        {d(created).format('YYYY/MM/DD')}
      </time>
    </p>
  );
};
