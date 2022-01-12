import Button from '../../Button'
import KapWindow from './kap-window'
import Info from './info'
import Logo from '../../../public/static/images/kap.svg'
import DownloadIcon from '../../../public/static/images/download.svg'
import ReactGA from 'react-ga'
import styles from './hero.module.css'

const Hero = () => (
  <section className={styles.hero}>
    <header className={`${styles.header} grid`}>
      <Logo />
      {/* Download Button */}
      <Button theme="light" onClick={() => ReactGA.pageview('/download')} href="/api/download" download>
        <DownloadIcon />
        <span className={styles.buttonText}>Get kap</span>
      </Button>
    </header>

    <div className={styles.heroContent}>
      <h1>Capture your screen</h1>
      <h3>An open-source screen recorder built with web technology.</h3>
      <Info />
    </div>
    <KapWindow />

    <div className={styles.curveContainer}>
      <div className={styles.curve} />
    </div>
  </section>
)

export default Hero
