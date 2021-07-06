import Head from 'next/head'
import ReactGA from 'react-ga'

// Google Analytics
ReactGA.initialize('UA-84705099-3')

const Meta = ({ children }) => (
  <>
    <Head>
      <meta name="theme-color" content="#000" />
      <title>Kap - Capture your screen</title>
    </Head>

    {children}
  </>
)

export default Meta
