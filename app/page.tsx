import Community from './_components/sections/community'
import Footer from './_components/sections/footer'
import Hero from './_components/sections/hero'
import Plugins from './_components/sections/plugins'
import Preview from './_components/sections/preview'

export default async function Page() {
  return (
    <>
      <Hero />
      <Preview />
      <Plugins />
      <Community />
      <Footer />
    </>
  )
}
