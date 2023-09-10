import Link from 'next/link';
import { Day } from '~/components/Day';
import { summarize } from 'utils/str';
import { Articles } from '~/repositories/article';

export const Card: React.FC<Articles[number]> = ({ meta, head, body }) => {
  return (
    <Link
      href={`/entries/${meta.id}`}
      className="block text-secondary bg-white/5 hover:bg-white/10 focus:bg-white/10 transition rounded-md p-8 hover:no-underline space-y-2"
      prefetch={false}
    >
      <h2 className="text-md font-bold">{head.title}</h2>
      <Day head={head} className="text-sm tracking-widest" />
      <div
        dangerouslySetInnerHTML={{
          __html: summarize(body.map((item) => item.htmlStr).join(''), 120),
        }}
        className="text-sm tracking-widest break-words"
      />
    </Link>
  );
};
