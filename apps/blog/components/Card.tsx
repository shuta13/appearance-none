import Link from 'next/link';
import { Day } from '~/components/Day';
import { Articles } from '~/repositories/article';
import RemoveMarkdown from 'remove-markdown';

export const Card: React.FC<Articles[number]> = ({ meta, head, body }) => {
  return (
    <Link
      href={`/entries/${meta.id}`}
      className="block text-secondary hover:bg-white/10 focus:bg-white/10 transition p-4 hover:no-underline space-y-2"
      prefetch={false}
    >
      <h2 className="text-md font-bold">{head.title}</h2>
      <Day head={head} className="text-sm tracking-widest" />
      <div className="text-sm tracking-widest break-words truncate">
        {RemoveMarkdown(body.map((value) => value.htmlStr).join(''))}
      </div>
    </Link>
  );
};
