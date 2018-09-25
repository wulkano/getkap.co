import { Component } from 'react'
import Confetti from 'react-dom-confetti'
import colors from '../../../lib/colors'
import RightArrow from '../../../static/images/arrow-right-white.svg'
import ReactGA from 'react-ga'

const noop = () => {}
const Input = ({ boom }) => (
  <div className="container">
    <input type="email" name="EMAIL" placeholder="Email address" />
    <button aria-label="send">
      <RightArrow />
      <Confetti
        active={boom}
        config={{
          angle: 90,
          spread: 53,
          startVelocity: 51,
          elementCount: 69,
          decay: 0.91
        }}
      />
    </button>
    <style jsx>{`
      .container {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        background-color: #ffffff;
        border: 4px solid #fff;
        box-sizing: content-box;
        border-radius: 4px;
      }

      input {
        flex: 1;
        padding: 0 0 0 16px;
        border: none;
        height: 100%;
        background: transparent;
        font-size: 14px;
        box-shadow: none;
        appearance: none;
        display: inline-block;
        margin: 0;
        color: #808080;
        border-radius: 4px 0px 0 4px;
        border-right: none;
      }

      input::placeholder {
        color: #000;
      }

      input:focus {
        color: #000;
        border-color: ${colors.purple};
      }

      button {
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        background-color: ${colors.purple};
        border: none;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      button:hover {
        cursor: pointer;
      }
    `}</style>
  </div>
)

class Form extends Component {
  state = { sent: false, refocused: false }
  componentDidMount() {}
  render() {
    const { sent, refocused } = this.state
    return (
      <form
        onSubmit={() => {
          ReactGA.pageview('/subscribe')
          if (!this.state.sent) {
            this.setState({ sent: true })
            if (window.chrome) {
              window.onfocus = () => this.setState({ refocused: true })
            }
          }
        }}
        action="https://getkap.us14.list-manage.com/subscribe/post?u=318c21d4f80a3b46f22ad6ddd&amp;id=f219da06bd"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <div>
          <Input boom={refocused} />
          <input
            style={{ position: 'absolute', left: '-59999px' }}
            type="text"
            name="b_318c21d4f80a3b46f22ad6ddd_f219da06bd"
            tabIndex="-1"
            value=""
            onChange={noop}
          />
        </div>
        <style jsx>{`
          form {
            margin-top: 32px;
            max-width: 430px;
            width: 100%;
          }
          p {
            font-size: 1.6rem;
            font-weight: normal;
            margin-bottom: 24px;
          }
          button {
            width: 48px;
            height: 48px;
            background-color: ${colors.purple};
          }
        `}</style>
      </form>
    )
  }
}

export default Form
