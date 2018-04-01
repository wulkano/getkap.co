import KapWindow from './kap-window'
import Info from './info'
import Button from './button'
import Logo from '../../../static/images/kap.svg'
import colors from '../../../lib/colors'

const Hero = () => (
  <section className="hero">
    <div className="curve-container">
      <div className="curve" />
    </div>
    <header className="header grid">
      <Logo />
      {/* Download Button */}
      <Button theme="light" href="https://kap-updates.now.sh/download">
        <img src="../../static/images/download.svg" />
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

export default Hero
