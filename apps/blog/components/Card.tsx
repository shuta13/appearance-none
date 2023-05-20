import Link from 'next/link';
import { Day } from '~/components/Day';
import { summarize } from 'utils/str';
import { Articles } from '~/repositories/article';
import { NotionRenderer } from 'react-notion-x';

export const Card: React.FC<Articles[number]> = ({ meta, head, body }) => {
  return (
    <Link href={`/entries/${meta.id}`} className="block" prefetch={false}>
      <h2 className="text-md font-bold">{head.title}</h2>
      <Day head={head} className="text-sm tracking-widest" />
      <div
        dangerouslySetInnerHTML={{
          __html: summarize(body.map((item) => item.htmlStr).join(''), 40),
        }}
        className="text-sm tracking-widest"
      />
    </Link>
  );
};
