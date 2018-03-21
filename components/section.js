export default ({ children, height, fill, style }) => (
  <div className={`section ${fill ? 'fill' : ''}`} style={{ height, ...style }}>
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
