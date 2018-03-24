import Section from '../../section'
import Quotes from './quotes'

const Logo = ({ href, name }) => (
  <a href={href} title={name} className="logo">
    <img key={name} src={`/static/images/logos/${name}.png`} />
  </a>
)
const Logos = () => (
  <div>
    <div className="logo-row">
      <Logo name="zeit" href="https://zeit.co/" />
      <Logo name="circle-ci" href="https://circleci.com/" />
    </div>

    <div className="logo-row">
      <Logo name="sentry" href="https://getsentry.io/" />
      <Logo name="git-hub" href="https://github.com/" />
      <Logo name="google" href="https://google.com/" />
    </div>

    <div className="logo-row">
      <Logo name="facebook" href="https://facebook.com/" />
    </div>

    {/*
      Setting rules for .logo-row's initial state without media query
      doesn't apply because of styled-jsx bug
    */}
    <style jsx>{`
      @media (min-width: 486px) {
        .logo-row {
          display: inline-block;
        }
      }
    `}</style>

    <style jsx>
      {`
        @media (max-width: 486px) {
          .logo-row {
            display: flex;
            justify-content: center;
          }
        }
      `}
    </style>
  </div>
)

export default () => (
  <Section>
    <div className="root">
      <div className="text">
        <h3>Loved by the community</h3>
        <h4>Designers, developers, project managers. They all use Kap. </h4>
        <Logos />
      </div>
      <Quotes />
    </div>
    <style jsx>{`
      .text {
        margin: 128px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .root {
        // width: 1200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 512px;
      }
      h3 {
        margin-bottom: 16px;
        font-size: 32px;
        line-height: 1.5;
        font-weight: 500;
      }
      h4 {
        font-size: 20px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.6;
        text-align: center;
        max-width: 368px;
        margin-bottom: 64px;
      }
    `}</style>
  </Section>
)
