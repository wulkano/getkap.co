import styles from './Grid.module.css'

export const Column = ({ children }) => <div className={styles.column}>{children}</div>

const Grid = ({ children, style }) => (
  <div className={styles.grid} style={style}>
    {children}
  </div>
)

export default Grid
