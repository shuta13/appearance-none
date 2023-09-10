import Document, { Head, Html, Main, NextScript } from 'next/document';

declare global {
  interface Window {
    twttr: any;
  }
}

class BlogDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://b.st-hatena.com/js/bookmark_button.js" defer />
        </body>
      </Html>
    );
  }
}

export default BlogDocument;
