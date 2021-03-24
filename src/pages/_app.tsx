import '../assets/styles/global.css';
import type { AppProps } from 'next/dist/next-server/lib/router/router';

const BlogApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default BlogApp;
