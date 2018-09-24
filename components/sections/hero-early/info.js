import screenSizes from '../../../lib/screen-sizes'

const Info = () => (
  <div>
    <a href="https://github.com/wulkano/kap">View and contribute on GitHub</a>
    <span> macOS 10.12 or later required</span>
    <style jsx>{`
      div {
        max-width: 390px;
        width: 100%;
        margin: 0 32px;
        margin-top: 32px;
      }
      a {
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        color: #ffffff;
        float: left;
      }
      a:hover {
        text-decoration: underline;
      }
      span {
        opacity: 0.8;
        font-size: 12px;
        font-weight: normal;
        float: right;
        clearfix: both;
      }
      @media only screen and (max-width: ${screenSizes.phone}) {
        div {
          display: block;
          margin: 0 16px;
          width: 100vw;
          margin-top: 32px;
        }
        span {
          padding-top: 8px;
        }
        a,
        span {
          display: block;
          float: none;
        }
      }
    `}</style>
  </div>
)

export default Info
