import '../styles/global.css';
import 'prismjs/themes/prism-tomorrow.css';
import type { AppProps } from 'next/app';
import { Courier_Prime, Source_Sans_Pro } from '@next/font/google';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-courier-prime',
});
const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-source-sans-pro',
});

const BlogApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div
      className={`${courierPrime.variable} ${sourceSansPro.variable} font-sans`}
    >
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
};

export default BlogApp;
