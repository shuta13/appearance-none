import '../assets/styles/global.css';
import 'prismjs/themes/prism-tomorrow.css';
import type { AppProps } from 'next/dist/next-server/lib/router/router';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer';
// import type { NextWebVitalsMetric } from 'next/dist/next-server/lib/utils';

// export const reportWebVitals = (metric: NextWebVitalsMetric) => {
//   console.log(metric);
// };

export const config = {
  unstable_runtimeJS: false,
};

const BlogApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default BlogApp;
