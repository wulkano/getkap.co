import styles from './section.module.css'

const Section = ({ children, height, fill, style }) => (
  <div className={`${styles.section} ${fill ? styles.fill : ''}`} style={{ height, ...style }}>
    {children}
  </div>
)

export default Section
