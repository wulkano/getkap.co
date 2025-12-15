import Image from 'next/legacy/image'
import styles from './community.module.css'

const Logo = ({ href, name, alt }) => (
  <a className={styles.logo} href={href} title={alt}>
    <Image src={`/static/images/logos/${name}@3x.png`} alt={name} width={64} height={64} />
  </a>
)

const Logos = () => (
  <div>
    <div className={styles.logoRow}>
      <Logo name="vercel" alt="Vercel" href="https://vercel.com/" />
      <Logo name="circle-ci" alt="Circle CI" href="https://circleci.com/" />
    </div>

    <div className={styles.logoRow}>
      <Logo name="sentry" alt="Sentry" href="https://sentry.io/" />
      <Logo name="github" alt="GitHub" href="https://github.com/" />
      <Logo name="google" alt="Google" href="https://google.com/" />
    </div>

    <div className={styles.logoRow}>
      <Logo name="abstract" href="https://www.goabstract.com/" />
    </div>
  </div>
)

export default Logos
