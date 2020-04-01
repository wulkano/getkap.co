import React from 'react'
import screenSizes from '../../../lib/screen-sizes'

const KapWindow = () => (
  <div className="window">
    <picture>
      <source
        srcSet={`${require('../../../public/static/images/Kap@2x.webp')} 2x, ${require('../../../public/static/images/Kap.webp')} 1x`}
        type="image/webp"
      />
      <source srcSet={`${require('../../../public/static/images/app-light.png')} 1x`} type="image/png" />
      <img src={require('../../../public/static/images/app-light.png')} alt="The Kap Window" />
    </picture>
    <style jsx>{`
      img {
        max-width: 464px;
        height: auto;
        opacity: 1;
        user-select: none;
        user-drag: none;
        width: 100%;
      }

      .window {
        z-index: 100;
        max-width: 464px;
        max-height: 66px;
        width: 100%;
        height: 66px;
        box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.4);
        background-color: white;
        border-radius: 5px;
        position: relative;
        margin: 0 32px;
        margin-bottom: -32px;
      }

      @media only screen and (max-width: ${screenSizes.tablet}) {
        .window {
          height: auto;
        }
      }
      @media only screen and (max-width: ${screenSizes.phone}) {
        .window,
        img {
          width: 100% !important;
          height: auto;
        }
        .window {
          margin-bottom: -12px;
          height: auto;
        }
      }
    `}</style>
  </div>
)

export default KapWindow
