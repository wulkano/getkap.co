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
        .column:first-child {
          margin-left: 16px;
        }
        .column:last-child {
          width: 30%;
          margin-right: 16px;
        }
      }
      @media only screen and (max-width: 1000px) {
        .column:last-child {
          width: 40%;
          margin-right: 16px;
        }
      }
      @media only screen and (max-width: 700px) {
        .column,
        .column:last-child {
          width: 100%;
          padding: 0 16px;
          margin-top: 50px;
          margin-right: 0;
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
        margin-bottom: 3rem;
      }
      @media only screen and (max-width: 700px) {
        .grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 3rem;
          margin-top: 3rem;
          overflow: hidden;
        }
      }
    `}</style>
  </div>
)

export default Grid
