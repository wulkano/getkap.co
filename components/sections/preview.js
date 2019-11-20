import React from 'react'
import Section from './section'
import screenSizes from '../../lib/screen-sizes'
import PlayButton from '../../static/images/play.svg'
import RightArrow from '../../static/images/arrow-right.svg'

const Preview = () => (
  <Section>
    <div className="split">
      <div className="preview">
        <img src="/static/images/preview/kap-light-mode@2x.jpg" alt="Kap in light mode" className="preview-image" />
      </div>
      <div className="container">
        <div className="preview__description text">
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

      .preview {
        width: 50%;
        z-index: 100;
        position: relative;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }

      .preview > img {
        float: right;
        width: 960px;
        height: 682px;
        border-radius: 4px 4px 4px 4px;
      }

      .preview:hover :global(.preview__play-button) {
        transform: scale(1.2);
      }

      .preview:hover .overlay {
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

      .container {
        width: 50%;
        max-width: 600px;
        display: flex;
        justify-content: center;
      }

      .preview__description {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        max-width: 368px;
        margin-left: 32px;
        margin-right: 32px;
      }

      .preview__description p {
        border-bottom: solid 1px #f1f1f1;
        padding-bottom: 32px;
        margin-bottom: 32px;
      }

      .preview__description a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }

      .preview__description a :global(svg) {
        animation: ease-out alternate 1;
        animation-duration: 460ms;
        transition: all 1000ms ease;
        transform: translateX(0px);
        animation-fill-mode: forwards;
      }

      .preview__description a:hover {
        text-decoration: underline;
      }

      .preview__description a:hover :global(svg) {
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
        0% {
          transform: translateX(0px);
        }
        40% {
          transform: translateX(-10px);
        }
        60% {
          transform: translateX(3px);
        }
        80% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0px);
        }
      }

      @media only screen and (max-width: ${screenSizes.tablet}) {
        .split {
          flex-direction: column-reverse;
          margin-top: 64px;
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

        .preview {
          width: 100%;
          z-index: 100;
          position: relative;
          cursor: pointer;
          margin-top: 32px;
          overflow: hidden;

          /* Formula is: (height / width * 100%) */
          padding-top: calc(2048 / 2880 * 100%);
          height: 0;
        }

        .preview > img {
          width: 100%;
          float: none;
          height: auto;
          position absolute;
          top: 0;
        }

        .overlay:hover {
          background-color: transparent;
        }
      }
    `}</style>
  </Section>
)

export default Preview
