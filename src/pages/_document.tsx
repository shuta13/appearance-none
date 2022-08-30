import Document, { Head, Html, Main, NextScript } from 'next/document';

// export const config = {
//   unstable_runtimeJS: false,
// };
class BlogDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://b.st-hatena.com/js/bookmark_button.js" defer />
          <script src="https://platform.twitter.com/widgets.js" defer />
        </body>
      </Html>
    );
  }
}

export default BlogDocument;
