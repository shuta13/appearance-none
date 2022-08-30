import Document, { Head, Html, Main, NextScript } from 'next/document';

// export const config = {
//   unstable_runtimeJS: false,
// };
//

declare global {
  interface Window {
    twttr: () => Window['twttr'];
  }
}

class BlogDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <script src="https://platform.twitter.com/widgets.js" async />
          {/* ref: https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites */}
          <script>
            {typeof window !== 'undefined' &&
              (window.twttr = (function (d, s, id) {
                var js,
                  fjs = d.getElementsByTagName(s)[0],
                  t = window.twttr || {};
                if (d.getElementById(id)) return t;
                js = d.createElement(s);
                js.id = id;
                // @ts-expect-error
                js.src = 'https://platform.twitter.com/widgets.js';
                fjs.parentNode?.insertBefore(js, fjs);

                // @ts-expect-error
                t._e = [];
                // @ts-expect-error
                t.ready = function (f) {
                  // @ts-expect-error
                  t._e.push(f);
                };

                return t;
              })(document, 'script', 'twitter-wjs'))}
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://b.st-hatena.com/js/bookmark_button.js" defer />
          {/*
            <script src="https://platform.twitter.com/widgets.js" defer />
          */}
        </body>
      </Html>
    );
  }
}

export default BlogDocument;
