import { FC, PropsWithChildren, ReactNode, useMemo } from 'react';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="lg:child:pr-4 grid-main h-full">
      <Header className="pt-4 pb-8 inset-0" />
      <main>{children}</main>
      <Footer className="sticky top-[100vh] pt-8 pb-4" />
    </div>
  );
};

export const getBaseLayout = (page: ReactNode) => (
  <BaseLayout>{page}</BaseLayout>
);
