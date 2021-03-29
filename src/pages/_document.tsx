import Document, { Head, Html, Main, NextScript } from 'next/document';
import { SEO } from '../components/SEO';

class BlogDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <SEO />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BlogDocument;
