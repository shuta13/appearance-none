import Link from 'next/link';
import { Day } from '~/components/Day';
import { summarize } from 'utils/str';
import { Articles } from '~/repositories/article';

export const Card: React.FC<Articles[number]> = ({ meta, head, body }) => {
  return (
    <Link href={`/entry/${meta.id}`} className="block">
      <h2 className="text-md font-bold">{head.title}</h2>
      <Day head={head} className="text-sm tracking-widest" />
      <div
        dangerouslySetInnerHTML={{
          __html: summarize(body.map((item) => item.htmlStr).join(''), 60),
        }}
        className="text-sm tracking-widest"
      />
    </Link>
  );
};
