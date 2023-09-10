import classNames from 'classnames';
import Link from 'next/link';

export const Footer: React.FC<{ className?: string }> = ({ className }) => (
  <footer
    className={classNames(
      'space-y-4 flex flex-col place-items-center',
      className
    )}
  >
    <Link
      href="https://github.com/shuta13"
      target="_blank"
      className="text-14 bg-secondary text-primary hover:opacity-80 hover:no-underline rounded-full px-4 py-2"
    >
      About Me
    </Link>
    <div>
      <small>&#169; {new Date().getFullYear()} did0es</small>
    </div>
  </footer>
);
