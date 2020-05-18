import React from 'react'
import Confetti from 'react-dom-confetti'
import colors from '../../../lib/colors'
import RightArrow from '../../../public/static/images/arrow-right-white.svg'

const Input = ({ boom }) => (
  <div className="container">
    <input type="email" id="EMAIL" name="EMAIL" placeholder="Email address" />
    <button type="submit" aria-label="Submit">
      <RightArrow />
      <Confetti
        active={boom}
        config={{
          angle: 90,
          spread: 53,
          startVelocity: 51,
          elementCount: 69,
          decay: 0.91,
        }}
      />
    </button>
    <style jsx>{`
      .container {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
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
        color: #666;
        border-radius: 4px 0px 0 4px;
        background-color: #ffffff;
        border: solid 2px #cccccc;
        border-right: none;
      }

      input:focus {
        color: #000;
        border-color: ${colors.purple};
      }

      button {
        width: 48px;
        height: 48px;
        background-color: ${colors.purple};
        border: none;
        border-radius: 0px 4px 4px 0px;
      }

      button:hover {
        cursor: pointer;
      }
    `}</style>
  </div>
)

class Form extends React.Component {
  state = { sent: false, refocused: false }
  componentDidMount() {}
  render() {
    const { sent, refocused } = this.state
    return (
      <form
        onSubmit={() => {
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
        <label htmlFor="EMAIL">Sign up for updates</label>
        <div>
          <Input boom={refocused} />
          <input
            style={{ position: 'absolute', left: '-59999px' }}
            type="text"
            name="b_318c21d4f80a3b46f22ad6ddd_f219da06bd"
            tabIndex="-1"
            defaultValue=""
            aria-hidden
          />
        </div>
        <style jsx>{`
          label {
            font-size: 1.6rem;
            font-weight: normal;
            margin-bottom: 24px;
            display: block;
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
