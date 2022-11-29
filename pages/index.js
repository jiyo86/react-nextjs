import HomeCarousel from '../components/HomeCarousel'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles.HeroWrp}><HomeCarousel /></div>
      <section className={`${styles.ftcosection} ${styles.bgLight} ${styles.fctNoPt}`}></section>
      <section className={`${styles.ftcosection} ${styles.bgLight} ${styles.fctNoPt}`}></section>
      <section className={`${styles.ftcosection} ${styles.bgLight}`}></section>
      <section className={styles.ftcosection}></section>
      <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>
    </>
  )
}
