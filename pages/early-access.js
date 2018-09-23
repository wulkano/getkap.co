import React from 'react'
import Meta from '../components/meta'

// Sections
import Hero from '../components/sections/hero'
import Footer from '../components/sections/footer-slim'
import EarlyAccess from '../components/sections/early-access'
import Section from '../components/sections/section'

export default () => (
  <Meta>
    <Hero />
    <Section>
      <EarlyAccess />
    </Section>
    <Footer />
  </Meta>
)
