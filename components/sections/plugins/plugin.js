import React from 'react'
import screenSizes from '../../../lib/screen-sizes'

const Plugin = ({ title, description, color, href = '#' }) => (
  <a href={href} className="plugin" style={{ backgroundColor: color }} target="_blank" rel="noopener">
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

        margin-bottom: 16px;
        display: inline-block;
        transition: 100ms ease;
        will-change: transform;

        width: 208px;
        height: 160px;
      }
      .plugin:hover {
        transform: scale(1.05);
      }
      @media only screen and (max-width: ${screenSizes.tablet}) {
        .plugin:hover {
          transform: scale(1);
        }
      }
    `}</style>
  </a>
)

export default Plugin
