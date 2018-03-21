import Section from '../section'

const Logo = ({ href, name }) => (
  <a href={href} title={name}>
    <img key={name} src={`/static/images/logos/${name}.png`} />
  </a>
)
const Logos = () => (
  <div>
    <Logo name="zeit" href="https://zeit.co/" />
    <Logo name="circle-ci" href="https://circleci.com/" />
    <Logo name="sentry" href="https://getsentry.io/" />
    <Logo name="git-hub" href="https://github.com/" />
    <Logo name="google" href="https://google.com/" />
    <Logo name="facebook" href="https://facebook.com/" />
  </div>
)
export default () => (
  <Section>
    <div className="text">
      <h3>Loved by the community</h3>
      <Logos />
    </div>
    <style jsx>{`
      .text {
        margin-top: 128px;
      }
    `}</style>
  </Section>
)
