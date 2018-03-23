import Section from '../section'

const Plugin = ({ title, description, color, href }) => (
  <a href={href || '#'} className="plugin" style={{ backgroundColor: color }}>
    <span>{title}</span>
    <p>{description}</p>
    <style jsx>{`
      span {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
        display: block;
      }
      p {
        font-weight: normal;
      }
      .plugin {
        color: #000;
        padding: 32px;
        border-radius: 4px;
        box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.1);
        width: 208px;
        height: 160px;
        margin-right: 16px;
        margin-bottom: 16px;
        display: inline-block;
        transition: 100ms ease;
        will-change: transform;
      }
      .plugin:hover {
        transform: scale(1.05);
      }
      @media only screen and (max-width: 600px) {
        .plugin:hover {
          transform: scale(1);
        }
      }
    `}</style>
  </a>
)

const Buttons = () => (
  <div>
    <a className="browse" href="https://www.npmjs.com/search?q=kap%20plugins">
      <img src={require('../../static/images/compass.svg')} />

      <span>Browse Plugins</span>
    </a>
    <a className="download" href="https://kap-updates.now.sh/download">
      <img src={require('../../static/images/download-white.svg')} />

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
      @media only screen and (max-width: 900px) {
        div {
          position: absolute;
        }
      }
    `}</style>
  </div>
)
export default () => (
  <Section>
    <div className="plugins">
      <div className="plugins__text">
        <div className="power">
          <h3>The power of open-source</h3>
          <p>
            The ease of use and speed you’ve been looking for – the
            functionality and extensibility you didn’t know you needed.{' '}
          </p>
        </div>
      </div>
      <div className="plugins__display">
        <div className="list-wrapper">
          <div className="list">
            <Plugin
              title="giphy"
              color="#ffd500"
              description="Share GIFs on Giphy"
              href="https://github.com/wulkano/kap-giphy"
            />
            <Plugin
              title="now"
              color="#FFF"
              description="Share on ▲ZEIT now"
              href="https://github.com/lucaperret/kap-now"
            />
            <Plugin
              title="draggable"
              color="#00ffbe"
              description="Share recordings with drag and drop"
              href="https://github.com/albinekb/kap-draggable"
            />
          </div>
        </div>

        <div className="buttons-desktop">
          <Buttons />
        </div>
      </div>
      <div className="buttons-mobile">
        <Buttons />
      </div>
    </div>
    <style jsx>{`
      .power {
        max-width: 368px;
        float: right;
      }
      .plugins {
        background: black;
        color: white;
        flex: 1;
        height: 100%;
        display: flex;
        overflow: hidden;
        padding: 192px 0;
      }

      h3 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 16px;
        line-height: 1.33;
      }
      p {
        font-size: 16px;
        font-weight: normal;
      }
      .plugins__text {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 100px;
      }
      .plugins__display {
        height: 100%;
        margin-left: 32px;
      }
      .buttons-mobile {
        display: none;
        top: -164px;
        position: relative;
        left: 32px;
      }
      @media only screen and (max-width: 900px) {
        .plugins {
          flex-direction: column;

          padding-top: 128px;
          padding-bottom: 0px;
        }
        .plugins__text {
          padding-right: 32px;
          margin-bottom: 64px;
          width: 100%;
          padding: 0 32px;
          justify-content: flex-start;
        }
        .plugins__display {
          flex-direction: row;
          width: 100%;
          margin-left: 0px;
          padding-left: 32px;
          justify-content: flex-start;
          display: block;
          overflow-x: scroll;
          -webkit-overflow-scrolling: touch;

          padding-bottom: 48px;
          padding-bottom: 164px;
        }
        .list {
          width: 700px;
        }
        .buttons-desktop {
          display: none;
        }
        .buttons-mobile {
          display: block;
        }
      }

      @media only screen and (max-width: 640px) {
        .plugins__display {
          padding-left: 16px;
        }
        .plugin__text {
          padding: 0 16px !important;
        }
        .power {
          max-width: none;
        }
        .buttons-mobile {
          left: 16px;
        }
      }
    `}</style>
  </Section>
)
