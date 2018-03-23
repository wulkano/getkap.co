import Section from '../section'
import Confetti from 'react-dom-confetti'
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
      @media only screen and (max-width: 460px) {
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

const KapWindow = () => (
  <div className="root">
    <div className="window">
      <img src={require('../../static/images/kap-window@2x.png')} />
      <style jsx>{`
        img {
          width: 320px;
          height: 180px;
          opacity: 1;
        }
        .window {
          z-index: 100;

          width: 320px;
          height: 180px;
          box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
          background-color: white;
          border-radius: 4px;
          transform: translateY(50%);
          position: relative;
        }
        @media only screen and (max-width: 420px) {
          .window,
          img {
            width: 288px !important;
            height: 163px !important;
          }
        }
        .window {
          margin-bottom: -20%;
          transform: translateY(20%);
        }
      `}</style>
    </div>
  </div>
)

const DownloadButton = () => (
  <a href="https://kap-updates.now.sh/download">
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
        height: 48px;
      }
      a:hover {
        text-decoration: underline;
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
  <Section>
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
      <div
        className="curve"
        style={{
          backgroundImage: `url(${require('../../static/images/curve-mobile.svg')})`
        }}
      />
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
        padding: 0 32px;
        width: 100vw;
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

      .curve {
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
        z-index: 100;
        font-size: 48px;
      }
      h2 {
        font-size: 24px;
        font-weight: 500;
        line-height: 1.33;
        max-width: 448px;
        text-align: center;
        display: inline-block;
      }
      h1 {
        font-size: 1em;
        line-height: 64px;
        font-weight: 500;
        margin-bottom: 16px;
        text-align: center;
      }
      .header {
        max-width: 1200px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 64px;
      }
      @media only screen and (max-width: 1200px) {
        .header {
          margin-top: 32px;
        }
        .curve {
          width: 110vw;
        }
        .center {
          display: block;
          text-align: center;
        }
      }
      @media only screen and (min-width: 600px) {
        h1 {
          margin-top: 112px;
        }
      }
      @media only screen and (max-width: 600px) {
        h1 {
          margin-top: 64px;
        }
      }
      @media only screen and (max-width: 500px) {
        h1 {
          font-size: 32px;
          max-width: 200px;
          line-height: 1.25;
          display: inline-block;
          margin-top: 32px;
        }
        h2 {
          max-width: 288px;
          line-height: 1.2;
          font-size: 2rem;
        }
        .gradient {
          padding: 0 16px;
        }
        .header {
          margin-top: 16px;
        }
        .curve {
          width: 100vw;
          height: 120px;
        }
      }
    `}</style>
  </Section>
)
