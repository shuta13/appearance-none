import '../assets/styles/global.css';
import '../assets/styles/markdown.css';
import type { AppProps } from 'next/dist/next-server/lib/router/router';
import 'prismjs/themes/prism-tomorrow.css';
import Link from 'next/link';
import { BlogTitle } from '../config';

const Header: React.FC = () => (
  <header>
    <h1>
      <Link href="/">
        <a>{BlogTitle}</a>
      </Link>
    </h1>
  </header>
);

const Footer: React.FC = () => (
  <footer>
    <Link href="https://did0es.me" passHref={true}>
      <a>© 2021 did0es</a>
    </Link>
  </footer>
);

const BlogApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default BlogApp;
