export default ({ children, height }) => (
  <div className={`section`} style={{ height }}>
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
