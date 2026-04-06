import styles from './Button.module.css'

export const Button = ({size = 'big', variant = 'primary', children, ...rest}) => (
  <button
    {...rest} 
    className={`${styles.button} ${styles[`button_${size}`]} ${styles[`button_${variant}`]}`}>
      {children}
    </button>
)