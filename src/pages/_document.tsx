import Document, { Head, Html, Main, NextScript } from 'next/document';

class BlogDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* <!-- Cloudflare Web Analytics --> */}
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${process.env.CLOUDFLARE_ANALYTICS_ID}"}`}
          ></script>
          {/* <!-- End Cloudflare Web Analytics --> */}
        </body>
      </Html>
    );
  }
}

export default BlogDocument;
