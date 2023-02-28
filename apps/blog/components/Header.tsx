import Link from 'next/link';

export const Header: React.FC<{ className?: string }> = ({ className }) => (
  <header className={className}>
    <Link href="/" className="block text-secondary">
      <h1 className="font-mono text-sm whitespace-pre w-fit">{`{
  appearance:
    "none" 
}`}</h1>
    </Link>
  </header>
);
