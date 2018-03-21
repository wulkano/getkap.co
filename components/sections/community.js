import Section from '../section'

const Logo = ({ href, name }) => <img key={name} src={`/static/images/logos/${name}.png`} />
const Logos = () => (
  <div>
    <Logo name="zeit" />
    <Logo name="circle-ci" />
    <Logo name="git-hub" />
    <Logo name="google" />
    <Logo name="facebook" />
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
