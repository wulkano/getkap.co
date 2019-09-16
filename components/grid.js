import React from 'react'
import screenSizes from '../lib/screen-sizes'

export const Column = ({ children }) => (
  <div className="column">
    {children}
    <style jsx>{`
      .column:last-child {
        width: 368px;
      }
      @media only screen and (max-width: ${screenSizes.laptop}) {
        .column:last-child {
          width: 40%;
        }
      }
      @media only screen and (max-width: ${screenSizes.tablet}) {
        .column,
        .column:last-child {
          width: 100%;
          margin-top: 50px;
        }
      }
    `}</style>
  </div>
)

const Grid = ({ children, style }) => (
  <div className="grid" style={style}>
    {children}
    <style jsx>{`
      .grid {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 1168px;
        width: 100%;
        margin-bottom: 128px;
        margin-top: 64px;
        margin-right: 32px;
        margin-left: 32px;
      }
      @media only screen and (max-width: ${screenSizes.tablet}) {
        .grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 64px;
          margin-top: 32px;
          overflow: hidden;
          margin-right: 16px;
          margin-left: 16px;
        }
      }
    `}</style>
  </div>
)

export default Grid
