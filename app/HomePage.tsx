'use client';

import Meta from '../components/meta'

// Sections
import Hero from '../components/sections/hero'
import Preview from '../components/sections/preview'
import Plugins from '../components/sections/plugins'
import Community from '../components/sections/community'
import Footer from '../components/sections/footer'

const Index = () => (
  <Meta>
    <Hero />
    <Preview />
    <Plugins />
    <Community />
    <Footer />
  </Meta>
)

export default Index
