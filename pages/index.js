import Head from 'next/head'

import 'modern-normalize/modern-normalize.css'

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
      }
    `}</style>
  </div>
)

export default () => (
  <div>
    <Head>
      <title>Kap</title>
    </Head>
    <Sections>
      <Hero />
      <Video />
      <Plugins />
      <Community />
      <Footer />
    </Sections>
  </div>
)
