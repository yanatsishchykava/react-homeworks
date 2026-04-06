import inst from '../../../assets/icons/inst.svg'
import logo from '../../../assets/icons/logo_react.svg'
import twitter_icon from '../../../assets/icons/twitter_icon.svg'
import youtube from '../../../assets/icons/youtube.svg'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={logo} alt="logo" className={styles.logo} />
          <p className={styles.description}>
            Takeaway & Delivery template <br /> for small - medium businesses.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.column}>
            <p className={styles.title}>COMPANY</p>
            <a>Home</a>
            <a>Order</a>
            <a>FAQ</a>
            <a>Contact</a>
          </div>

          <div className={styles.column}>
            <p className={styles.title}>TEMPLATE</p>
            <a>Style Guide</a>
            <a>Changelog</a>
            <a>Licence</a>
            <a>Webflow University</a>
          </div>

          <div className={styles.column}>
            <p className={styles.title}>FLOWBASE</p>
            <a>More Cloneables</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          Built by <span>Flowbase</span> · Powered by <span>Webflow</span>
        </p>

        <div className={styles.socials}>
          <img src={inst} alt="instagram" />
          <img src={twitter_icon} alt="twitter" />
          <img src={youtube} alt="youtube" />
        </div>
      </div>
    </footer>
  )
}
