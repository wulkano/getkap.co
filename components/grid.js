export const Column = ({ children }) => (
  <div className="column">
    {children}
    <style jsx>{`
      .column:last-child {
        width: 368px;
      }
      @media only screen and (max-width: 1400px) {
        .column {
          width: 25%;
        }
        .column:last-child {
          width: 30%;
        }
      }
      @media only screen and (max-width: 1000px) {
        .column:last-child {
          width: 40%;
        }
      }
      @media only screen and (max-width: 700px) {
        .column,
        .column:last-child {
          width: 100%;
          margin-top: 50px;
        }
      }
    `}</style>
  </div>
)

const Grid = ({ children }) => (
  <div className="grid">
    {children}
    <style jsx>{`
      .grid {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 1200px;
        width: 100%;
        margin-bottom: 32px;
        margin-top: 64px;
        margin-right: 32px;
        margin-left: 32px;
      }
      @media only screen and (max-width: 700px) {
        .grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 16px;
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
