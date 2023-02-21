import Image from 'next/image';
// import Link from 'next/link';

export const Footer: React.FC = () => (
  <footer className="flex flex-col place-items-center space-y-4">
    <Image
      alt="did0es"
      src="/images/icon.svg"
      width={64}
      height={64}
    />
    {/*
    <Link
      href="https://studio.did0es.me"
      passHref={true}
    >
    */}
    <div>
      &#169; 2021 did0es
    </div>
    {/*
    </Link>
    */}
  </footer>
);
