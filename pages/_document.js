import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />

          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="description"
            content="An open-source screen recorder built with web technology"
          />
          <meta
            name="keywords"
            content="Kap,capture,record,screen,aspect,ratio,HD,FPS,60FPS"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:title" content="Kap - Capture your screen" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://getkap.co/" />
          <meta
            property="og:image"
            content="https://getkap.co/static/images/ogp/kap-ogp-v2-large.png"
          />
          <meta
            property="og:description"
            content="An open-source screen recorder built with web technology"
          />
          <meta property="og:site_name" content="Kap" />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@wulkanocom" />
          <meta name="twitter:title" content="Kap" />
          <meta
            name="twitter:description"
            content="An open-source screen recorder built with web technology"
          />
          <meta
            name="twitter:image"
            content="https://getkap.co/static/images/ogp/kap-ogp-v2-twitter.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
