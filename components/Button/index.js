import styles from './Button.module.css'

const Button = ({ children, theme = '', ...props }) => (
  <a className={`${styles.button} ${styles[theme]}`} {...props}>
    {children}
  </a>
)

export default Button
