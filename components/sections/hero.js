import Section from '../section'

const Info = () => (
  <div>
    <a href="https://github.com/wulkano/kap">View and contribute on GitHub</a>
    <span> macOS 10.12 or later required</span>
    <style jsx>{`
      div {
        width: 390px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 32px;
      }
      a {
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        color: #ffffff;
      }
      a:hover {
        text-decoration: underline;
      }
      span {
        opacity: 0.8;
        font-size: 12px;
        font-weight: normal;
        line-height: 1.33;
      }
    `}</style>
  </div>
)

const KapWindow = () => (
  <div>
    <style jsx>{`
      div {
        background: url(/static/images/kap-window@2x.png);
        background-size: contain;
        width: 320px;
        height: 180px;
        box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
        z-index: 100;
        transform: translateY(50%);
        position: relative;
      }
    `}</style>
  </div>
)

const DownloadButton = () => (
  <a href="https://github.com/wulkano/kap/releases/download/v2.0.0/Kap-2.0.0.dmg">
    <img src={require('../../static/images/download.svg')} />
    <span>Get kap</span>
    <style jsx>{`
      a {
        text-transform: uppercase;
        color: #7247ff;
        display: flex;
        align-items: center;
        background: #fff;
        padding: 16px;
        border-radius: 4px;
      }
      span {
        margin-left: 0.8em;
        font-size: 12px;
        font-weight: bold;
      }
    `}</style>
  </a>
)

const Logo = () => (
  <img src={require('../../static/images/kap.svg')} title="Kap" />
)

export default () => (
  <Section height="640px">
    <div className="gradient">
      <div className="header-animation" />
      <div className="header">
        <div>
          <Logo />
        </div>
        <div>
          <DownloadButton />
        </div>
      </div>
      <div className="center">
        <h1>Capture your screen</h1>
        <h2>An open-source screen recorder built with web technology.</h2>
        <Info />
      </div>
      <KapWindow />
      <div className="curve" />
    </div>
    <style jsx>{`
      .gradient {
        flex: 1;
        height: 100%;
        color: white;
        flex-direction: column;
        align-items: center;
        position: relative;
        display: flex;
      }

      .header-animation {
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: -1;
      }

      .header-animation::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: radial-gradient(
          farthest-corner at -0% 100%,
          #7247ff 30%,
          #00ffbe 95%
        );
        animation: bg 6s ease-in infinite alternate;
        will-change: transform;
        transform-style: preserve-3d;
      }

      @keyframes bg {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(2);
        }
      }

      @media only screen and (max-width: 1200px) {
        .curve {
          width: 100vw !important;
        }
      }
      .curve {
        background: url(/static/images/curve-mobile.svg) no-repeat;
        width: 200vw;
        position: absolute;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        height: 200px;
        transform-origin: bottom;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center bottom;
      }
      .center {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 48px;
      }
      h2 {
        font-size: 24px;
        font-weight: 500;
        line-height: 1.33;
        max-width: 448px;
        text-align: center;
      }
      h1 {
        font-size: 1em;
        line-height: 64px;
        font-weight: 500;
        margin-bottom: 16px;
      }
      .header {
        width: 1200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 64px;
      }
    `}</style>
  </Section>
)
