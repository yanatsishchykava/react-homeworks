import trustpilot_logo from '../../assets/icons/trustpilot.svg'
import heroImage from '../../assets/images/hero_image.png'
import { Button } from '../../components/button/Button'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Beautiful food & <br />
            takeaway,&nbsp;<span>delivered</span> <br />
            to your door.
          </h1>

          <p className={styles.text}>
            {`Lorem Ipsum is simply dummy text of the printing and \n
        typesetting industry. Lorem Ipsum has been the industry's \n
        standard dummy text ever since the 1500.`}
          </p>

          <Button size="big" variant="primary">
            Place an Order
          </Button>

          <div className={styles.reviews_section}>
            <div className={styles.trustpilot_logo}>
              <img src={trustpilot_logo} alt="trustpilot" />
            </div>

            <p className={styles.reviews}>
              <span>4.8 out of 5</span> based on 2000+ reviews
            </p>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src={heroImage} alt="image" />
        </div>
      </div>
    </section>
  )
}
