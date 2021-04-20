import '../assets/styles/global.css';
import 'prismjs/themes/prism-tomorrow.css';
import type { AppProps } from 'next/dist/next-server/lib/router/router';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer';
import * as gtag from '../utils/gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const BlogApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
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
