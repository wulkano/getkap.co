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
const Quote = ({ handle, name, text }) => (
  <div className="card">
    <p>{text}</p>
    <div className="quote-info">
      <span className="name">{name}</span>
      <a className="handle">{handle}</a>
    </div>
    <style jsx>{`
      .card {
        width: 320px;
        margin: 16px;
        border-radius: 4px;
        background-color: #f9f9f9;
        padding: 32px;
      }
      p {
        color: #000000;
        line-height: 1.43;
        font-size: 14px;
        font-weight: normal;
        margin-bottom: 16px;
      }
      .quote-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      .name {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #000000;
      }
      .handle {
        font-size: 14px;
        font-weight: normal;
        line-height: 1.43;
        color: #808080;
      }
    `}</style>
  </div>
)
const Quotes = () => (
  <div>
    <Quote
      handle="@michaelschultz"
      name="Michael Schultz"
      text="Kap is maybe the best GIF recorder I’ve used so far."
    />
    <Quote
      handle="@ThrivingKings"
      name="Daniel Raftery"
      text="I can't recommend Kap enough. Sprinkle your bugs/PRs with animated GIF screen captures. It's seriously awesome."
    />
    <Quote
      handle="@boogah"
      name="Jason Cosper"
      text="Been looking for a nice, easy to use screen recorder. Kap seems to fit the bill. Bonus: it’s open source."
    />
    <Quote
      handle="@boogah"
      name="Max Stoiber"
      text="Extremely impressed with the Kap 1.0 release; this is the best screen recorder ever, built with web technologies! 💯"
    />
    <Quote
      handle="@michaelschultz"
      name="Michael Schultz"
      text="Kap is maybe the best GIF recorder I’ve used so far."
    />
    <Quote
      handle="@ThrivingKings"
      name="Daniel Raftery"
      text="I can't recommend Kap enough. Sprinkle your bugs/PRs with animated GIF screen captures. It's seriously awesome."
    />
    <Quote
      handle="@boogah"
      name="Jason Cosper"
      text="Been looking for a nice, easy to use screen recorder. Kap seems to fit the bill. Bonus: it’s open source."
    />
    <Quote
      handle="@boogah"
      name="Max Stoiber"
      text="Extremely impressed with the Kap 1.0 release; this is the best screen recorder ever, built with web technologies! 💯"
    />
    <style jsx>{`
      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        max-width: 1500px;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
)
export default () => (
  <Section>
    <div className="text">
      <h3>Loved by the community</h3>
      <h4>Designers, developers, project managers. They all use Kap. </h4>
      <Logos />
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
