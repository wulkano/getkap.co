import ReactGA from 'react-ga'
import styles from './footer.module.css'

const Links = () => (
  <ul className={styles.links}>
    <li>
      <a target="_blank" rel="noopener" onClick={() => ReactGA.pageview('/download/arm64')} href="/api/download/arm64" download>
        Download for Apple (M1)
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener" onClick={() => ReactGA.pageview('/download/x64')} href="/api/download/x64" download>
        Download for Intel
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
