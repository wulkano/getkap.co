import Head from 'next/head'

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
