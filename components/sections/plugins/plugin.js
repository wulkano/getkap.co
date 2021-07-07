import styles from './plugins.module.css'

const Plugin = ({ title, description, color, href = '#' }) => (
  <a href={href} className={styles.plugin} style={{ backgroundColor: color }} target="_blank" rel="noopener">
    <span>{title}</span>
    <p>{description}</p>
  </a>
)

export default Plugin
