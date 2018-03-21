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
        box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
        width: 208px;
        height: 160px;
        margin-right: 16px;
        margin-bottom: 16px;
        display: inline-block;
        transition: 100ms ease;
      }
      .plugin:hover {
        transform: scale(1.2);
      }
    `}</style>
  </a>
)
export default () => (
  <Section height="600px">
    <div className="plugins">
      <div className="plugins__text">The power of open-source</div>
      <div className="plugins__display">
        <div className="list">
          <Plugin title="giphy" color="#ffd500" description="Share GIFs on Giphy" />
          <Plugin title="draggable" color="#FFF" description="Share recordings with drag and drop" />
          <Plugin title="clipboard" color="#00ffbe" description="Copy GIFs to clipboard" />
        </div>
      </div>
    </div>
    <style jsx>{`
      .plugins {
        background: black;
        color: white;
        flex: 1;
        height: 100%;
        display: flex;
      }
      .plugins__text {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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
