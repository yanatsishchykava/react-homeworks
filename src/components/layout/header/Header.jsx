import cart from '../../../assets/icons/cart_icon.svg'
import logo from '../../../assets/icons/logo_react.svg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.right}>
          <nav className={styles.nav}>
            <a className={styles.active}>Home</a>
            <a className={styles.link}>Menu</a>
            <a className={styles.link}>Company</a>
            <a className={styles.link}>Login</a>
          </nav>

          <div className={styles.cart}>
            <img src={cart} alt="cart" />
            <span className={styles.cart_count}>0</span>
          </div>
        </div>
      </div>
    </header>
  )
}
