import Link from 'next/link';

export const Header: React.FC = () => (
  <header>
    <Link href="/" className="space-y-4">
      <h1 className="font-mono text-center">{`{ appearance: none  }`}</h1>
    </Link>
  </header>
);
