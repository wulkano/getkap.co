import React from 'react'
import Meta from '../components/Meta'

// Sections
import Hero from '../components/sections/hero'
import Video from '../components/sections/video'
import Plugins from '../components/sections/plugins'
import Community from '../components/sections/community'
import Footer from '../components/sections/footer'

export default () => (
  <Meta>
    <Hero />
    <Video />
    <Plugins />
    <Community />
    <Footer />
  </Meta>
)
