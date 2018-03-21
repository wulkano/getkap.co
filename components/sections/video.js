import Section from '../section'

export default () => (
  <Section>
    <div className="split">
      <div className="video">
        <div className="overlay">
          <img src="/static/images/play.svg" className="play-icon" />
        </div>
        <img src="/static/images/video/screenshot-2017-09-14-07-17-50.jpg" />
      </div>
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
        margin-top: 228px;
        margin-bottom: -100px;
      }
      .video {
        width: 50%;
        z-index: 100;
        position: relative;
      }
      .video > img {
        float: right;
      }
      .overlay {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        right: 0;
        width: 100%;
        max-width: 704px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .play-icon {
        width: 48px;
        height: 48px;
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
