import classNames from 'classnames';
import Link from 'next/link';

export const Footer: React.FC<{ className?: string }> = ({ className }) => (
  <footer
    className={classNames(
      'space-y-4 flex flex-col place-items-center',
      className
    )}
  >
    <div>
      <Link
        href="https://github.com/shuta13"
        target="_blank"
        className="text-12"
      >
        About Me
      </Link>
    </div>
    <div>
      <small>&#169; {new Date().getFullYear()} did0es</small>
    </div>
  </footer>
);
