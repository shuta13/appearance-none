import '../styles/global.css';
import 'prismjs/themes/prism-tomorrow.css';
import type { AppProps } from 'next/app';
import { Courier_Prime, Noto_Sans_JP } from '@next/font/google';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import NextTopLoader from 'nextjs-toploader';

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
  display: 'swap',
});
const sourceSansPro = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font-source-sans',
  display: 'swap',
});

const BlogApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div
      className={`${courierPrime.variable} ${sourceSansPro.variable} font-sans h-full`}
    >
      <NextTopLoader
        showSpinner={false}
        shadow={false}
        color="var(--theme-color-secondary)"
      />
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
};

export default BlogApp;
