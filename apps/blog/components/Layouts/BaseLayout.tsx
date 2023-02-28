import { FC, PropsWithChildren, ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="tracking-wider">
    <Header />
    <main>{children}</main>
    <aside>
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
    </aside>
    <Footer />
  </div>
);

export const getBaseLayout = (page: ReactNode) => (
  <BaseLayout>{page}</BaseLayout>
);
