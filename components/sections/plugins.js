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
      }
      .plugin:hover {
        transform: scale(1.05);
      }
    `}</style>
  </a>
)
export default () => (
  <Section height="600px">
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
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </Section>
)
