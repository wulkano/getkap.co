import screenSizes from '../../../lib/screen-sizes'

const Logo = ({ href, name }) => (
  <a href={href} title={name}>
    <img
      key={name}
      src={`/static/images/logos/${name}.png`}
      srcSet={`/static/images/logos/${name}@2x.png 2x`}
    />
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
      <Logo name="github" href="https://github.com/" />
      <Logo name="google" href="https://google.com/" />
    </div>

    <div className="logo-row">
      <Logo name="abstract" href="https://www.goabstract.com/" />
    </div>

    <style jsx>
      {`
        .logo-row {
          display: inline-block;
        }

        @media (max-width: ${screenSizes.tablet}) {
          .logo-row {
            display: flex;
            justify-content: center;
          }
        }
      `}
    </style>
  </div>
)

export default Logos
