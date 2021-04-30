import '../assets/styles/global.css';
import '../assets/styles/progress.css';
import 'prismjs/themes/prism-tomorrow.css';
import type { AppProps } from 'next/dist/next-server/lib/router/router';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer';
import * as gtag from '../utils/gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
// import type { NextWebVitalsMetric } from 'next/dist/next-server/lib/utils';

// export const reportWebVitals = (metric: NextWebVitalsMetric) => {
//   console.log(metric);
// };

const handleRouteChangeStart = () => {
  NProgress.start();
};

const handleRouteChangeComplete = (url: string) => {
  gtag.pageview(url);
  NProgress.done();
};

const BlogApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  useEffect(() => {
    const bookmarkButtonScript = document.createElement('script');
    bookmarkButtonScript.src = 'https://b.st-hatena.com/js/bookmark_button.js';
    document.body.appendChild(bookmarkButtonScript);

    return () => {
      document.body.removeChild(bookmarkButtonScript);
    };
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default BlogApp;
