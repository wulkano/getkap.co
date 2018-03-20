import Section from '../section'
const Info = () => (
  <div>
    <a href="#">View and contribute on GitHub</a>
    <span> macOS 10.12 or later required</span>
    <style jsx>{`
      div {
        width: 390px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 32px;
      }
      a {
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        color: #ffffff;
      }
      span {
        opacity: 0.8;
        font-size: 12px;
        font-weight: normal;
        line-height: 1.33;
      }
    `}</style>
  </div>
)
export default () => (
  <Section>
    <div className="gradient">
      <div className="header">
        <div>Kap</div>
        <div>Get Kap</div>
      </div>
      <div className="center">
        <h1>Capture your screen</h1>
        <h2>An open-source screen recorder built with web technology.</h2>
        <Info />
      </div>
    </div>
    <style jsx>{`
      .gradient {
        background-color: #7247ff;
        flex: 1;
        height: 100%;
        background: linear-gradient(#7247ff, #00ffbe);
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .center {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 48px;
      }
      h2 {
        font-size: 24px;
        font-weight: 500;
        line-height: 1.33;
        max-width: 448px;
        text-align: center;
      }
      h1 {
        font-size: 1em;
        line-height: 64px;
        font-weight: 500;
        margin-bottom: 16px;
      }
      .header {
        width: 1200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 64px;
      }
    `}</style>
  </Section>
)
