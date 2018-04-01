const Buttons = () => (
  <div>
    <a className="browse" href="https://www.npmjs.com/search?q=kap%20plugins">
      <img src={require('../../../static/images/compass.svg')} />

      <span>Browse Plugins</span>
    </a>
    <a className="download" href="https://kap-updates.now.sh/download">
      <img src={require('../../../static/images/download-white.svg')} />

      <span>Download App</span>
    </a>
    <style jsx>{`
      a {
        text-transform: uppercase;
        color: white;
        display: flex;
        align-items: center;
        background: #7247ff;
        padding: 16px;
        border-radius: 4px;
        height: 48px;
        float: left;
      }
      .browse {
        margin-right: 16px;
      }
      .download {
        background: transparent;
        border: solid 2px #ffffff;
      }
      a:hover {
        text-decoration: underline;
      }
      span {
        margin-left: 0.8em;
        font-size: 12px;
        font-weight: bold;
      }
      div {
        display: inline-block;
        margin-top: 48px;
      }
      @media only screen and (max-width: 370px) {
        a {
          margin-bottom: 16px;
        }
      }
    `}</style>
  </div>
)

export default Buttons
