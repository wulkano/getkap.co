import React from 'react'
import screenSizes from '../../../lib/screen-sizes'

const Logo = ({ href, name }) => (
  <a className="logo" href={href} title={name}>
    <img
      key={name}
      src={require(`../../../public/static/images/logos/${name}.png`)}
      srcSet={`${require(`../../../public/static/images/logos/${name}@2x.png`)} 2x, ${require(`../../../public/static/images/logos/${name}@3x.png`)} 3x`}
      alt={name}
    />

    <style jsx>{`
      .logo {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        height: 64px;
        width: 64px;
        display: inline-block;
      }

      .logo img {
        height: 64px;
        width: 64px;
      }
    `}</style>
  </a>
)

const Logos = () => (
  <div>
    <div className="logo-row">
      <Logo name="zeit" href="https://zeit.co/" />
      <Logo name="circle-ci" href="https://circleci.com/" />
    </div>

    <div className="logo-row">
      <Logo name="sentry" href="https://sentry.io/" />
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

        .logo-row > :global(*) {
          margin-right: 32px;
        }

        .logo-row:last-child > :global(*):last-child {
          margin-right: 0;
        }

        @media (max-width: ${screenSizes.tablet}) {
          .logo-row {
            display: flex;
            justify-content: center;
            margin-bottom: 32px;
          }

          .logo-row > :global(*):last-child {
            margin-right: 0;
          }
        }
      `}
    </style>
  </div>
)

export default Logos
