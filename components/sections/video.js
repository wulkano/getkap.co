import React from 'react'
import Section from './section'
import screenSizes from '../../lib/screen-sizes'
import PlayButton from '../../static/images/play.svg'
import RightArrow from '../../static/images/arrow-right.svg'

const Video = () => (
  <Section>
    <div className="split">
      <div className="video">
        <div className="overlay">
          <PlayButton className="video__play-button" />
        </div>
        <img src="/static/images/preview/kap-light-mode.png" alt="Kap in light mode" className="preview" />
      </div>
      <div className="container">
        <div className="video__description text">
          <h3>More quality, less noise</h3>
          <p>Export as GIF, MP4, WebM or APNG with optional audio, highlight clicks and trimming.</p>
          <a href="https://medium.com/wulkano-friends/from-idea-to-product-and-beyond-a12850403c38">
            <span>How Kap was built</span>
            <RightArrow />
          </a>
        </div>
      </div>
    </div>

    <style jsx>{`
      .split {
        flex: 1;
        display: flex;
        overflow: hidden;
        margin-top: 228px;
        margin-bottom: -64px;
      }

      .video {
        width: 50%;
        z-index: 100;
        position: relative;
        cursor: pointer;
        border-radius: 4px 4px 4px 4px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }

      .video > img {
        float: right;
        width: 1024px;
        height: 576px;
      }

      .video:hover :global(.video__play-button) {
        transform: scale(1.2);
      }

      .video:hover .overlay {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        width: 100%;
        max-width: 1024px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.12s ease;
      }

      :global(.video__play-button) {
        width: 48px;
        height: 48px;
        transition: transform 0.12s ease;
      }

      .container {
        width: 50%;
        max-width: 600px;
        display: flex;
        justify-content: center;
      }

      .video__description {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        max-width: 368px;
        margin-left: 32px;
        margin-right: 32px;
      }

      .video__description p {
        border-bottom: solid 1px #f1f1f1;
        padding-bottom: 32px;
        margin-bottom: 32px;
      }

      .video__description a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }

      .video__description a :global(svg) {
        animation: ease-out alternate infinite;
        animation-duration: 300ms;
        transition: all 1000ms ease;
        transform: translateX(0px);
        animation-fill-mode: forwards;
      }

      .video__description a:hover {
        text-decoration: underline;
      }

      .video__description a:hover :global(svg) {
        animation-name: arrow;
      }

      h3 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 16px;
        line-height: 1.33;
      }

      img.preview {
        border-radius: 4px 4px 4px 4px;
        overflow: hidden;
      }

      @keyframes arrow {
        from {
          transform: translateX(0px);
        }
        to {
          transform: translateX(-10px);
        }
      }

      @media only screen and (max-width: ${screenSizes.tablet}) {
        .split {
          flex-direction: column-reverse;
          margin-top: 128px;
          margin-bottom: -64px;
          padding: 16px;
          padding-bottom: 0;
        }

        .text {
          margin-left: 0;
          margin-right: 0;
          max-width: none;
          flex: 1;
        }

        .container {
          max-width: none;
          width: 100%;
        }

        .video {
          width: 100%;
          z-index: 100;
          position: relative;
          cursor: pointer;
          margin-top: 32px;

          overflow: hidden;
        }

        .video > img {
          width: 100%;
          float: none;
          height: auto;
        }

        .overlay:hover {
          background-color: transparent;
        }
      }
    `}</style>
  </Section>
)

export default Video
