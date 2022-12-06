import Image from "next/image";

import styles from './HomeCare.module.scss'

const HomeCare = () => {
  const services = [
    {
        title: "Pain Management",
        description: "Our physical therapists can assist in reducing pain and improving function, as well as provide education on physical exercise and pain management. We carefully evaluate, diagnose and design a patient centered treatment plan including the most advanced physical therapy techniques.",
    },
    {
        title: "Orthopedic Physiotherapy",
        description: "Our specialists are trained in the treatment of post-operative orthopaedic procedures,  sports injuries, osteoarthritis, sprains, strains, back & neck pain, spinal conditions, amputations and other musculoskeletal disorders.",
    },
    {
        title: "Stroke and Paralysis",
        description: "We  provide individualized one on one treatment with primary focus on restoring function and improving overall quality of life for the Patients with neurological impediments resulting from stroke, traumatic brain and spinal cord injuries, Parkinson’s and neurodegenerative diseases.",
    },
  ];

  return(
    <div className='container'>
      <div className="row d-flex no-gutters">
        <div className={`col-md-6 d-flex ${styles.imgSection}`}>
          <Image src='/about.jpg' alt="Services" fill className={styles.homeAbout} />
        </div>
        <div className={`col-md-6 pl-md-5 py-md-5 ${styles.rightSection}`}>
          <div className={`pl-md-4 pt-md-5 ${styles.headingSection}`}>
            <span className={styles.subheading}>Welcome to Accounting</span>
            <h2 className="mb-4">We Are the Best Accounting Agency</h2>
          </div>
          {services.map((item, index) => {
            return(
              <div className={`w-100 d-flex ${styles.services}`} key={index} >
                <div className={`d-flex align-items-center justify-content-center ${styles.icon}`}><span className="flaticon-wealth"></span></div>
                <div className={`pl-4 ${styles.text}`}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            );})}
        </div>
      </div>
    </div>
  );
}

export default HomeCare;
