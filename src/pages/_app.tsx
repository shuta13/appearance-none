import '../assets/styles/global.css';
import type { AppProps } from 'next/dist/next-server/lib/router/router';
import 'prismjs/themes/prism-tomorrow.css';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import Head from 'next/head';

const BlogApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default BlogApp;
