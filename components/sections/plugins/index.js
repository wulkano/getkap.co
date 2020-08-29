import React from 'react'
import Button from '../../button'
import Section from '../section'
import Plugin from './plugin'
import screenSizes from '../../../lib/screen-sizes'
import CompassIcon from '../../../public/static/images/compass.svg'
import DownloadIcon from '../../../public/static/images/download-white.svg'

const Plugins = () => (
  <Section>
    <div className="plugins">
      <div className="plugins__text">
        <div className="power">
          <h3>The power of open-source</h3>
          <p>The ease of use and speed you’ve been looking for – the functionality and extensibility you didn’t know you needed.</p>
        </div>
      </div>

      <div className="plugins__display">
        <div className="list-wrapper">
          <div className="list">
            <Plugin title="giphy" color="#ffd500" description="Share GIFs on Giphy" href="https://github.com/wulkano/kap-giphy" />
            <Plugin
              title="vercel"
              color="#FFF"
              description="Deploy with Vercel"
              href="https://github.com/delianides/kap-vercel"
            />
            <Plugin title="streamable" color="#00ffbe" description="Upload to Streamable" href="https://github.com/kevva/kap-streamable" />
          </div>
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
        overflow: hidden;
        padding: 192px 0;
        padding-bottom: 128px;
      }

      h3 {
        margin-bottom: 16px;
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

      .list :global(.plugin):not(:last-child) {
        margin-right: 16px;
      }

      .plugins__buttons {
        display: flex;
        justify-content: flex-start;
        padding-top: 48px;
      }

      .plugins__buttons > :global(*):not(:last-child) {
        margin-right: 16px;
      }

      @media only screen and (max-width: ${screenSizes.wide}) {
        .plugins {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 192px;
          padding-bottom: 6px;
        }

        .plugins__text {
          padding-right: 32px;
          margin-bottom: 32px;
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
          justify-content: center;
          align-items: center;
          display: block;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 128px;
          padding-left: 0;
        }

        .list-wrapper {
          overflow-x: auto;
          padding: 16px;
          padding-left: 32px;
        }

        .list {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .plugins__buttons {
          justify-content: center;
        }
      }

      @media only screen and (max-width: ${screenSizes.tablet}) {
        .plugins {
          align-items: flex-start;
          justify-content: flex-start;
          padding-bottom: 0px;
          padding-top: 128px;
        }

        .plugins__display {
          margin-bottom: -100px;
        }

        .list-wrapper {
          padding-left: 16px;
        }

        .list {
          width: 700px;
          display: block;
        }

        .plugins__buttons {
          flex-direction: column;
          padding: 0 16px;
          margin-top: 24px;
        }

        .plugins__buttons > :global(*):not(:last-child) {
          margin-right: 0;
          margin-bottom: 16px;
        }

        .plugins__text {
          padding: 0 16px;
          text-align: left;
          justify-content: flex-start;
        }

        .power {
          max-width: none;
        }
      }
    `}</style>
  </Section>
)

export default Plugins
