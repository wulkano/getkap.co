import Head from 'next/head'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-84705099-3')

import 'eightpoint/dist/eight.min.css'

import Hero from '../components/sections/hero'
import Video from '../components/sections/video'
import Plugins from '../components/sections/plugins'
import Community from '../components/sections/community'
import Footer from '../components/sections/footer'

const Sections = ({ children }) => (
  <div className="sections">
    {children}
    <style jsx>{`
      .sections {
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
      }
    `}</style>
  </div>
)

export default () => (
  <div>
    <Head>
      <meta name="theme-color" content="#000" />

      <title>Kap - Capture your screen.</title>
    </Head>
    <Sections>
      <Hero />
      <Video />
      <Plugins />
      <Community />
      <Footer />
    </Sections>
    <style jsx global>{`
      @font-face {
        font-family: 'InterUI';
        font-style: normal;
        font-weight: 400;
        font-display: block; /* or block, swap, fallback, optional */
        src: url('/static/fonts/interui/Inter-UI-Regular.woff2') format('woff2'),
          url('/static/fonts/interui/Inter-UI-Regular.woff') format('woff');
      }

      @font-face {
        font-family: 'InterUI';
        font-style: normal;
        font-weight: 500;
        font-display: block; /* or block, swap, fallback, optional */
        src: url('/static/fonts/interui/Inter-UI-Medium.woff2') format('woff2'),
          url('/static/fonts/interui/Inter-UI-Medium.woff') format('woff');
      }

      @font-face {
        font-family: 'InterUI';
        font-style: normal;
        font-weight: 700;
        font-display: block; /* or block, swap, fallback, optional */
        src: url('/static/fonts/interui/Inter-UI-Bold.woff2') format('woff2'),
          url('/static/fonts/interui/Inter-UI-Bold.woff') format('woff');
      }

      @font-face {
        font-family: 'InterUI';
        font-style: normal;
        font-weight: 900;
        font-display: block; /* or block, swap, fallback, optional */
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
        background: #7146fe;
        color: white;
      }
    `}</style>
  </div>
)
