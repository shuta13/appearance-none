import { FC, PropsWithChildren, ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const ErrorLayout: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export const getErrorLayout = (page: ReactNode) => (
  <ErrorLayout>{page}</ErrorLayout>
);
