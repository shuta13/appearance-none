import { FC, PropsWithChildren, ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export const getBaseLayout = (page: ReactNode) => (
  <BaseLayout>{page}</BaseLayout>
);
