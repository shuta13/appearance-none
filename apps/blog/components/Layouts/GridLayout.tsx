import { FC, PropsWithChildren, ReactNode, useMemo } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Skeleton } from '../Skeleton';
import Link from 'next/link';

export const GridLayout: FC<PropsWithChildren> = ({ children }) => {
  const categories = ['diary', 'development'];

  return (
    <div className="tracking-wider h-full">
      <Header className="pb-4 sticky inset-0" />
      <div className="lg:grid lg:child:pr-4 space-y-4 lg:space-y-0 grid-cols-8 mt-8 mx-4">
        <nav className="col-span-1 sticky inset-0">
          <ul>
            {categories.length > 0 ? (
              categories.map((category) => (
                <li key={category}>
                  <Link href={`/tags/${category}`} prefetch={false}>
                    {category}
                  </Link>
                </li>
              ))
            ) : (
              <Skeleton.Line className="space-y-4" />
            )}
          </ul>
        </nav>
        <main className="col-span-7">{children}</main>
      </div>
      <Footer className="sticky top-[100vh] px-4 pt-8 pb-4" />
    </div>
  );
};

export const getGridLayout = (page: ReactNode) => (
  <GridLayout>{page}</GridLayout>
);
