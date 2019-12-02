import React from 'react'
import Head from 'next/head'
import ReactGA from 'react-ga'
import colors from '../lib/colors'
import screenSizes from '../lib/screen-sizes.js'

// Google Analytics
ReactGA.initialize('UA-84705099-3')

const Meta = ({ children }) => (
  <React.Fragment>
    <Head>
      <meta name="theme-color" content="#000" />
      <title>Kap - Capture your screen</title>
    </Head>

    {children}

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
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Oxygen-Sans, 'Fira Sans', 'Droid Sans', Ubuntu,
          Cantarell, 'Helvetica Neue', sans-serif;
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

      @font-face {
        font-family: 'InterUI';
        font-style: normal;
        font-weight: 400;
        font-display: swap; /* or block, swap, fallback, optional */
        src: url('/static/fonts/interui/Inter-UI-Regular.woff2') format('woff2'),
          url('/static/fonts/interui/Inter-UI-Regular.woff') format('woff');
      }

      @font-face {
        font-family: 'InterUI';
        font-style: normal;
        font-weight: 500;
        font-display: swap; /* or block, swap, fallback, optional */
        src: url('/static/fonts/interui/Inter-UI-Medium.woff2') format('woff2'),
          url('/static/fonts/interui/Inter-UI-Medium.woff') format('woff');
      }

      @font-face {
        font-family: 'InterUI';
        font-style: normal;
        font-weight: 700;
        font-display: swap; /* or block, swap, fallback, optional */
        src: url('/static/fonts/interui/Inter-UI-Bold.woff2') format('woff2'),
          url('/static/fonts/interui/Inter-UI-Bold.woff') format('woff');
      }

      @font-face {
        font-family: 'InterUI';
        font-style: normal;
        font-weight: 900;
        font-display: swap; /* or block, swap, fallback, optional */
        src: url('/static/fonts/interui/Inter-UI-Black.woff2') format('woff2'),
          url('/static/fonts/interui/Inter-UI-Black.woff') format('woff');
      }

      body {
        font-family: 'InterUI', sans-serif !important; // TODO: how to override eightpoint?
        font-size: 1.2rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
      }

      ::selection {
        background: ${colors.purple};
        color: white;
      }

      .grid {
        max-width: 100%;
        width: 1168px;
      }

      /**
       * Typography
      **/
      h1 {
        font-size: 4.8rem;
        line-height: 1.333em;
        font-weight: 500;
        margin-bottom: 1.6rem;
      }

      h2 {
        font-size: 3.2rem;
        line-height: 1.5em;
        font-weight: 500;
      }

      h3 {
        font-size: 2.4rem;
        line-height: 1.333em;
        font-weight: 500;
      }

      h4 {
        font-size: 2rem;
        line-height: 1.5em;
        font-weight: 400;
      }

      p {
        font-size: 1.6rem;
        line-height: 1.5em;
      }

      p.paragraph--medium {
        font-weight: 500;
      }

      @media only screen and (max-width: ${screenSizes.phone}) {
        h1 {
          font-size: 3.2rem;
          line-height: 1.5em;
        }
      }

      /* Links */
      a {
        cursor: pointer;
        font-size: 1.6rem;
        line-height: 1.5em;
        color: ${colors.purple};
      }
    `}</style>
  </React.Fragment>
)

export default Meta
