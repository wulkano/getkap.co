import ReactGA from 'react-ga'
import styles from './footer.module.css'

const Links = () => (
  <ul className={styles.links}>
    <li>
      <a target="_blank" rel="noopener" onClick={() => ReactGA.pageview('/download')} href="/download" download>
        Download
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener" onClick={() => ReactGA.pageview('/issues')} href="https://github.com/wulkano/kap/issues">
        Issues
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noopener"
        onClick={() => ReactGA.pageview('/license')}
        href="https://github.com/wulkano/kap/blob/master/LICENSE.md"
      >
        License
      </a>
    </li>
  </ul>
)

export default Links
