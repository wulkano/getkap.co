import Section from '../section'

export default () => (
  <Section>
    <div className="split">
      <div className="video" />
      <div className="text">
        <h3>More quality, less noise</h3>
        <p>
          Export as GIF, MP4, WebM or APNG with optional audio, highlight clicks
          and trimming.
        </p>
        <div className="line" />
        <a href="#">
          <span>How Kap was built</span>
          <img src="/static/images/arrow-right.svg" />
        </a>
      </div>
    </div>
    <style jsx>{`
      .split {
        flex: 1;
        display: flex;
        overflow: hidden;
      }
      .text {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        max-width: 368px;
        margin-left: 132px;
      }
      .line {
        height: 1px;
        display: block;
        border-bottom: solid 1px #f1f1f1;
        width: 100%;
        margin: 32px 0;
      }
      h3 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
      }
      p {
        font-size: 16px;
        font-weight: normal;
      }
      .video {
        height: 500px;
        background: #333;
        width: 50%;
      }
      a {
        color: #7146fe;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      a img {
        animation: ease-out alternate;
        animation-duration: 0.2s;
        transition: all 1000ms ease;
        transform: translateX(0px);
        animation-fill-mode: forwards;
      }
      a:hover {
        text-decoration: underline;
      }
      a:hover img {
        animation-name: arrow;
      }
      @keyframes arrow {
        from {
          transform: translateX(0px);
        }
        to {
          transform: translateX(-10px);
        }
      }
    `}</style>
  </Section>
)
