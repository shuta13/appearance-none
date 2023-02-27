import Link from 'next/link';

export const Header: React.FC<{ className?: string }> = ({ className }) => (
  <header className={className}>
    <Link href="/" className="block text-secondary mt-8 ml-8 w-fit">
      <h1 className="font-mono text-sm whitespace-pre w-fit">{`{
  appearance:
    "none" 
}`}</h1>
    </Link>
  </header>
);
