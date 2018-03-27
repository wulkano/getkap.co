import Document, { Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
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
            content="/static/images/ogp/kap-ogp-v2-large.png"
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
            content="/static/images/ogp/kap-ogp-v2-twitter.png"
          />

          <link rel="shortcut icon" href="/static/favicon/kap.ico" />
          <link rel="apple-touch-icon" href="/static/favicon/icon-128.png" />
          <link rel="icon" href="/static/favicon/icon-32.png" sizes="32x32" />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon/icon-256.png"
            sizes="256x256"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon/icon-128.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon/icon-32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon/icon-16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon/icon-128.png"
            sizes="128x128"
          />
          <link rel="mask-icon" href="/static/favicon/kap.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <style jsx global>{`
          /* Eightpoint reset */
          html,
          body,
          div,
          span,
          object,
          iframe,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          blockquote,
          pre,
          a,
          abbr,
          address,
          cite,
          code,
          del,
          dfn,
          em,
          img,
          ins,
          kbd,
          q,
          s,
          samp,
          small,
          strong,
          sub,
          sup,
          var,
          b,
          i,
          dl,
          dt,
          dd,
          ol,
          ul,
          li,
          fieldset,
          form,
          label,
          legend,
          table,
          caption,
          tbody,
          tfoot,
          thead,
          tr,
          th,
          td,
          header,
          footer,
          section,
          article,
          nav,
          canvas,
          aside,
          figcaption,
          figure,
          hgroup,
          menuitem,
          summary,
          time,
          mark,
          audio,
          video {
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
            background: transparent;
          }

          html {
            box-sizing: border-box;
            font-size: 62.5%;
          }

          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Oxygen-Sans, 'Fira Sans', 'Droid Sans', Ubuntu, Cantarell,
              'Helvetica Neue', sans-serif;
            font-size: 16px;
            font-size: 1.6rem;
            line-height: 1.5em;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          a {
            text-decoration: none;
          }

          :focus {
            outline: 0;
          }

          ol,
          ul {
            list-style: none;
            margin: 0;
          }

          blockquote,
          q {
            quotes: none;
          }

          pre,
          code,
          kbd,
          samp,
          tt {
            font-family: 'Courier New', Courier, monospace;
            font-size: 1em;
          }
        `}</style>
      </html>
    )
  }
}
