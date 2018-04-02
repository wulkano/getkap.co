import Button from '../Button'
import Confetti from 'react-dom-confetti'
import Logo from '../../static/images/kap.svg'
import KapWindowImage from '../../static/images/kap-window@2x.png'
import colors from '../../lib/colors'

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
  <div className="window">
    <img src={KapWindowImage} alt="The Kap Window" />
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
        position: relative;
        margin-bottom: -88px;
      }

      @media only screen and (max-width: 420px) {
        .window,
        img {
          width: 288px !important;
          height: 163px !important;
        }
      }
    `}</style>
  </div>
)

export default () => (
  <section className="hero">
    <div className="curve-container">
      <div className="curve" />
    </div>
    <header className="header grid">
      <Logo />
      {/* Download Button */}
      <Button theme="light" href="https://kap-updates.now.sh/download">
        <img src={require('../../static/images/download.svg')} />
        <span>Get kap</span>
      </Button>
    </header>
    <div className="hero__content">
      <h1>Capture your screen</h1>
      <h3>An open-source screen recorder built with web technology.</h3>
      <Info />
    </div>
    <KapWindow />
    <style jsx>{`
      @keyframes bg {
        0% {
          background-position: 0% 50%;
        }

        50% {
          background-position: 100% 50%;
        }

        100% {
          background-position: 0% 50%;
        }
      }

      .hero {
        flex: 1;
        max-height: calc(100vh - 320px);
        min-height: 64rem;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding: 0 32px;
        background-image: radial-gradient(
          farthest-corner at -0% 100%,
          ${colors.purple} 30%,
          ${colors.teal} 95%
        );
        background-size: 150% 150%;
        animation: bg 12s ease-in infinite alternate;
        will-change: transform;
        transform-style: preserve-3d;
      }
      .curve-container {
        overflow: hidden;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
      }
      .curve {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 190vw;
        padding-bottom: 4%;
        background: url('../../static/images/curve-mobile.svg') center bottom;
        background-size: cover;
        margin-bottom: -3px;
      }

      .hero__content {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 100;
        padding-top: 128px;
        padding-bottom: 128px;
        text-align: center;
        width: 48rem;
        max-width: 100%;
      }

      .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 64px;
        z-index: 100;
      }

      @media only screen and (max-width: 1200px) {
        .header {
          margin-top: 32px;
        }
        .center {
          display: block;
          text-align: center;
        }
      }
      @media only screen and (min-width: 600px) {
        .header__content {
          margin-top: 112px;
          padding-top: 64px;
        }
      }
      @media only screen and (max-width: 600px) {
        .header__content {
          margin-top: 64px;
        }
      }
      @media only screen and (max-width: 500px) {
        .header__content {
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
      }
    `}</style>
  </section>
)
