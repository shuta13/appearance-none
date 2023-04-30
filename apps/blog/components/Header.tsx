import Link from 'next/link';
import { Logo } from './Logo';

export const Header: React.FC<{ className?: string }> = ({ className }) => (
  <header className={className}>
    <Link href="/" prefetch={false}>
      <Logo className="w-10 h-10 inline" />
    </Link>
  </header>
);
