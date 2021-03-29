import '../assets/styles/global.css';
import type { AppProps } from 'next/dist/next-server/lib/router/router';
import 'prismjs/themes/prism-tomorrow.css';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import Head from 'next/head';
import { SEO } from '../components/SEO';

const BlogApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SEO />
      <div className="container">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default BlogApp;
