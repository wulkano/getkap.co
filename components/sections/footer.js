import Section from '../section'
import Grid, { Column } from '../grid'
const Input = () => (
  <div>
    <input />
    <style jsx>{`
      input {
        width: 100%;
      }
    `}</style>
  </div>
)

const Links = () => (
  <ul>
    <li>
      <a href="#">Download</a>
    </li>
    <li>
      <a href="#">Issues</a>
    </li>
    <li>
      <a href="#">License</a>
    </li>
    <style jsx>{`
      a {
        width: 74px;
        height: 24px;
        font-size: 16px;
        font-weight: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: #7146fe;
      }
      li {
        margin-bottom: 12px;
      }
    `}</style>
  </ul>
)

const WulkanoAndFriends = () => (
  <div className="container">
    <a href="https://wulkano.com">
      <img src="/static/images/logos/wulkano.svg" />
    </a>
    <div className="spacer" />
    <a href="https://github.com/wulkano/kap/contributors">& friends</a>
    <style jsx>{`
      .container {
        display: flex;
        align-items: center;
        max-width: 152px;
        margin-top: -1.6rem;
      }

      .spacer {
        flex: 1;
      }

      img {
      }

      a {
        color: #000;
        font-size: 1.6rem;
        font-weight: normal;
      }
    `}</style>
  </div>
)

const EmailForm = () => (
  <form onSubmit={() => alert('not implemented yet')}>
    <p>Sign up for updates</p>
    <Input />
    <style jsx>{`
      p {
        font-size: 1.6rem;
        font-weight: normal;
      }
    `}</style>
  </form>
)
export default () => (
  <Section style={{ marginBottom: '128px' }}>
    <Grid>
      <Column>
        <WulkanoAndFriends />
      </Column>
      <Column>
        <Links />
      </Column>
      <Column>
        <EmailForm />
      </Column>
    </Grid>
  </Section>
)
