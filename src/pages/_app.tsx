import '../assets/styles/global.css';
import '../assets/styles/markdown.css';
import type { AppProps } from 'next/dist/next-server/lib/router/router';
import 'prismjs/themes/prism-tomorrow.css';

const BlogApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default BlogApp;
