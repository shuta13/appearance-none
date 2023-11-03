import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC<{ className?: string }> = ({ className }) => (
  <footer className={classNames('space-y-4', className)}>
    <div className="flex gap-x-4">
      <Link
        href="https://github.com/shuta13"
        target="_blank"
        className="text-14 bg-secondary text-primary hover:opacity-80 hover:no-underline p-2"
      >
        <Image width={32} height={32} alt="About Me" src="/images/me_alt.png" />
      </Link>
    </div>
    <div className="text-center">
      <small>&#169; {new Date().getFullYear()} did0es</small>
    </div>
  </footer>
);
