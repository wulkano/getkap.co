export default ({ children, height, fill }) => (
  <div className={`section ${fill ? 'fill' : ''}`} style={{ height }}>
    {children}
    <style jsx>{`
      .fill {
        width: 100vw;
        height: 100vh;
      }
      .section {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </div>
)
