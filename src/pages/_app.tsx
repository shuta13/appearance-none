import '../assets/styles/global.css';
import 'prismjs/themes/prism-tomorrow.css';
import type { AppProps } from 'next/dist/next-server/lib/router/router';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer';
import * as gtag from '../utils/gtag';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BlogApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [titleSvg, setTitleSvg] = useState('title-light');

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? setTitleSvg('title-light')
      : setTitleSvg('title-dark');
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <div className="container">
        <Header title={titleSvg} />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default BlogApp;
