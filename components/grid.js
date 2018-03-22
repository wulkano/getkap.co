export default ({ children }) => (
  <div className="grid">
    {children}
    <style jsx>{`
      .grid {
        display: grid;
        grid-template-columns: 33% 33.33% 33%;
        grid-gap: 32px;
        max-width: 1200px;
        width: 100%;
        margin-bottom: 128px;
      }
      @media only screen and (max-width: 600px) {
        .grid {
          display: flex;
          flex-direction: column;
          margin-bottom: 64px;
          margin-top: 128px;
          align-items: center;
        }
      }
    `}</style>
  </div>
)

export const Column = ({ children }) => (
  <div className="column">
    {children}
    <style jsx>{`
      .column {
      }
      @media only screen and (max-width: 600px) {
        .column {
          width: 300px;
          margin-top: 50px;
        }
      }
    `}</style>
  </div>
)
