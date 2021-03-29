import '../assets/styles/global.css';
import type { AppProps } from 'next/dist/next-server/lib/router/router';
import 'prismjs/themes/prism-tomorrow.css';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

const BlogApp = ({ Component, pageProps }: AppProps) => {
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
