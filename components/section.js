export default ({ children }) => (
  <div className="section">
    {children}
    <style jsx>{`
      .section {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </div>
)
