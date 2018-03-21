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
      }
    `}</style>
  </div>
)

export const Column = ({ children }) => <div>{children}</div>
