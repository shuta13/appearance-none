import { FC, PropsWithChildren, ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="grid md:grid-cols-4 grid-cols-5">
    <Header />
    <main className="col-span-4 md:col-span-3 md:mr-40 mr-8">{children}</main>
    <Footer className="col-span-5 md:col-span-4" />
  </div>
);

export const getBaseLayout = (page: ReactNode) => (
  <BaseLayout>{page}</BaseLayout>
);
