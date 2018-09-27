import colors from '../../../lib/colors'
import screenSizes from '../../../lib/screen-sizes'
import ReactGA from 'react-ga'

const Links = () => (
  <ul>
    <li>
      <a
        target="_blank"
        onClick={() => ReactGA.pageview('/download')}
        href="https://kap-updates.now.sh/download"
      >
        Download
      </a>
    </li>
    <li>
      <a
        target="_blank"
        onClick={() => ReactGA.pageview('/issues')}
        href="https://github.com/wulkano/kap/issues"
      >
        Issues
      </a>
    </li>
    <li>
      <a
        target="_blank"
        onClick={() => ReactGA.pageview('/license')}
        href="https://github.com/wulkano/kap/blob/master/license.md"
      >
        License
      </a>
    </li>
    <li>
      <a
        target="_blank"
        onClick={() => ReactGA.pageview('/privacy')}
        href="https://github.com/wulkano/kap/blob/master/PRIVACY.md"
      >
        Privacy
      </a>
    </li>
    <style jsx>{`
      a {
        width: 74px;
        height: 24px;
        font-size: 16px;
        font-weight: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: ${colors.purple};
      }

      a:hover {
        text-decoration: underline;
      }

      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
      }

      li {
        margin-left: 32px;
      }

      @media only screen and (max-width: ${screenSizes.tablet}) {
        ul {
          display: inline-block;
          padding-bottom: 32px;
        }
        li {
          padding: 8px 0;
          margin-left: 0px;
        }
      }
    `}</style>
  </ul>
)

export default Links
