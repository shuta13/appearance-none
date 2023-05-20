import { FC, PropsWithChildren, ReactNode, useMemo } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="tracking-wider h-full px-4">
      <div className="lg:child:pr-4 space-y-4 lg:space-y-0 mx-auto max-w-content">
        <Header className="pt-4 pb-4 inset-0" />
        <main>{children}</main>
        <Footer className="sticky top-[100vh] pt-8 pb-4" />
      </div>
    </div>
  );
};

export const getBaseLayout = (page: ReactNode) => (
  <BaseLayout>{page}</BaseLayout>
);
