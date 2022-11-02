import WulkanoLogo from '../../../public/static/images/logos/wulkano.svg'
import styles from './footer.module.css'

const WulkanoAndFriends = () => (
  <div className={styles.container}>
    <a title="Wulkano" href="https://wulkano.com" target="_blank" rel="noopener">
      <WulkanoLogo />
    </a>

    <a className={styles.friends} href="https://github.com/wulkano/kap/contributors" target="_blank" rel="noopener">
      &amp; friends
    </a>
  </div>
)

export default WulkanoAndFriends
