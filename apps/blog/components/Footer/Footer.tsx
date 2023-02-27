import classNames from 'classnames';
// import Link from 'next/link';

export const Footer: React.FC<{ className?: string }> = ({ className }) => (
  <footer
    className={classNames(
      'flex flex-col place-items-center space-y-4',
      className
    )}
  >
    {/*
    <Link
      href="https://studio.did0es.me"
      passHref={true}
    >
    */}
    <div>&#169; 2021 did0es</div>
    {/*
    </Link>
    */}
  </footer>
);
