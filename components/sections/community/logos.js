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

export default Logos
