import * as Popover from '@radix-ui/react-popover'
import KapWindow from './kap-window'
import Info from './info'
import Logo from '../../svg/logo'
import ExpandMoreIcon from '../../svg/expand-more'
import styles from './hero.module.css'
import buttonStyles from '../../Button/Button.module.css'

const Hero = () => (
  <section className={styles.hero}>
    <header className={`${styles.header} grid`}>
      <div className={styles.logo}>
        <Logo />
      </div>
      {/* Download Button */}
      <Popover.Root>
        <Popover.Trigger className={`${buttonStyles.button} ${buttonStyles.light} ${styles.downloadButton}`}>
          <span className={styles.buttonText}>Get kap</span>
          <ExpandMoreIcon />
        </Popover.Trigger>
        <Popover.Content className={styles.popoverContent} sideOffset={5} align="end">
          <ul>
            <li>
              <a href="/api/download/arm64" download>
                Download for Apple (M1)
              </a>
            </li>
            <li>
              <a href="/api/download/x64" download>
                Download for Apple (Intel)
              </a>
            </li>
          </ul>
        </Popover.Content>
      </Popover.Root>
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
