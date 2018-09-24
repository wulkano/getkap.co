import Button from '../../button.js'
import KapWindow from './kap-window'
import Info from './info'
import colors from '../../../lib/colors'
import screenSizes from '../../../lib/screen-sizes'
import Logo from '../../../static/images/kap.svg'
import DownloadIcon from '../../../static/images/download.svg'
import Form from '../early-access/form'

const Hero = () => (
  <section className="hero">
    <header className="header grid">
      <Logo />
      {/* Download Button */}
      <Button theme="light" href="https://kap-updates.now.sh/download">
        <DownloadIcon />
        <span>Get kap</span>
      </Button>
    </header>

    <div className="hero__content">
      <h1>Capture your screen</h1>
      <h3>Sign up for early access to a brand new Kap</h3>
      <Form />
      <Info />
    </div>

    <div className="curve-container">
      <div className="curve" />
    </div>

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
        min-height: 48rem;
        height: 80vh;
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
        padding-bottom: 4.5%;
        background: url('../../static/images/curve-mobile.svg') center bottom;
        background-size: cover;
        margin-bottom: -1px;
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
        width: 50rem;
        max-width: 100%;
      }

      .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 64px;
        z-index: 100;
        min-height: 48px;
      }

      @media only screen and (max-width: ${screenSizes.phone}) {
        .hero__content {
          padding: 48px 0;
        }
      }

      @media only screen and (max-width: ${screenSizes.tablet}) {
        .hero {
          min-height: 564px;
        }
        h2 {
          max-width: 288px;
          line-height: 1.2;
          font-size: 2rem;
        }

        .header {
          margin-top: 16px;
        }
      }
    `}</style>
  </section>
)

export default Hero
