// Move under sections directory
import Section from '../../section'
import Plugin from './plugin'
import Buttons from './buttons'

const Plugins = () => (
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
              description="Share on ZEIT now&nbsp;&nbsp;&nbsp;"
              href="https://github.com/lucaperret/kap-now"
            />
            <Plugin
              title="draggable"
              color="#00ffbe"
              description="Share with drag and drop"
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
        padding-bottom: 128px;
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
      @media only screen and (max-width: 1300px) {
        .plugins__text {
          margin-left: 32px;
        }
      }
      @media only screen and (min-width: 712px) {
        .plugins: {
          flex-direction: column;

          jusify-content: center;
          align-items: center;
        }
      }
      @media only screen and (max-width: 1410px) {
        .plugins {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 192px;
          padding-bottom: 6px;
        }
        .plugins__text {
          padding-right: 32px;
          margin-bottom: 54px;
          margin-left: 0px;
          width: 100%;
          padding: 0 32px;
          justify-content: center;
          padding-right: 0px;
          text-align: center;
        }
        .plugins__display {
          flex-direction: row;
          width: 100%;
          margin-left: 0px;
          padding-left: 32px;
          justify-content: center;
          align-items: center;
          display: block;
          overflow-x: scroll;
          -webkit-overflow-scrolling: touch;
          padding-top: 10px;
          padding-bottom: 128px;
        }
        .list {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .buttons-desktop {
          display: none;
        }
        .buttons-mobile {
          display: block;
          left: 16px;
          margin-bottom: -64px4;
          padding-top: 32px;
        }
      }

      @media only screen and (max-width: 640px) {
        .plugins {
          align-items: flex-start;
          justify-content: flex-start;
          padding-bottom: 0px;
        }
        .plugins__display {
          margin-bottom: -100px;

          padding-left: 16px;
        }
        .list {
          width: 700px;
          display: block;
        }
        .plugins__text {
          padding: 0 16px;
          text-align: left;
          justify-content: flex-start;
        }
        .power {
          max-width: none;
        }
        .buttons-mobile {
          left: 16px;

          position: relative;
          text-align: left;
          margin-bottom: 0px;
          top: -64px;
        }
      }
      @media only screen and (max-width: 370px) {
        .plugins__display {
          padding-bottom: 220px;
        }
        .buttons-mobile {
          top: -128px;
        }
      }
    `}</style>
  </Section>
)

export default Plugins
