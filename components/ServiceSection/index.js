import styles from './ServiceSection.module.scss'

const ServiceSection = () => {
    const services = [
    {
        title: "abc",
        description: "abc abcabcabcabca bcabcabcabc",
    },
    {
        title: "abc",
        description: "abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc ",
    },
    {
        title: "xyz",
        description: "xyz xyz xyzxyzxyzxyzxy zxyzxyzxyzxyzxyz xyzxyzx yzxyzxyzxyzxyz",
    },
    {
        title: "www",
        description: "xyz xyz xyz v vxyzxyzxyzxyzxyz  xyzxyzxyzxyzxyzxyzxyzxyz",
    },
    ];

    return(
    <div className="container">
        <div className="row">
            {services.map((item, index) => {
              return(<div key={index} className={`col-md-6 col-lg-3 d-flex align-self-stretch px-4 ftco-animate fadeInUp ftco-animated ${styles.services}`}>
                <div className="d-block">
                  <div className={styles.mediaBody}>
                    <h3 className={styles.heading}>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );})}
        </div>
    </div>
    );
}

export default ServiceSection;