import WulkanoLogo from '../../svg/wulkano-logo'
import styles from './footer.module.css'

const WulkanoAndFriends = () => (
  <div className={styles.container}>
    <a title="Wulkano" href="https://wulkano.com" target="_blank" rel="noopener" className={styles.logo}>
      <WulkanoLogo />
    </a>

    <a className={styles.friends} href="https://github.com/wulkano/kap/contributors" target="_blank" rel="noopener">
      &amp; friends
    </a>
  </div>
)

export default WulkanoAndFriends
