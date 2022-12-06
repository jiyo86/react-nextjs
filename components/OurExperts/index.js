import styles from './OurExpert.module.scss';

const OurExperts = () => {

    return(
        <>
        <div className={styles.overlay}></div>
        <div className="container">
          <div className="row justify-content-center pb-5 mb-3">
            <div className={`col-md-7 heading-section-white text-center ftco-animate fadeInUp ftco-animated ${styles.headingSection}`}>
              <span className={styles.subheading}>Testimonies</span>
              <h2>Happy Clients &amp; Feedbacks</h2>
            </div>
          </div>
        </div>
        </>
    )
}

export default OurExperts;
