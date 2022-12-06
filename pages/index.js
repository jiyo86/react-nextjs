import HomeCarousel from '../components/HomeCarousel';
import HomeCare from '../components/HomeCare';
import OurExperts from '../components/OurExperts';
import ServiceSection from '../components/ServiceSection';

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles.HeroWrp}><HomeCarousel /></div>
      <section className={`${styles.ftcosection} ${styles.bgLight} ${styles.fctNoPt}`}><HomeCare /></section>
      <section className={`${styles.ftcosection} ${styles.bgLight} ${styles.fctNoPt}`}><ServiceSection /></section>
      <section className={`${styles.ftcosection} ${styles.bgLight} ${styles.testimonySection}`}>
        <OurExperts />
      </section>
      <section className={styles.ftcosection}></section>
      <h1 className={styles.title}>

        </h1>
    </>
  )
}
