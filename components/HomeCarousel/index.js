import  Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

import styles from './HomeCarousel.module.scss'

const HomeCarousel = () => {

  const carouselContent = [
    {
      url: '/bg_1.jpg',
      title: 'Welcome to Our site',
      prefix: 'Get started',
      description: 'This is the home page',
      button: '',
    },
    {
      url: '/bg_2.jpg',
      title: 'Here we are',
      prefix: 'Lets know more',
      description: 'Group of people',
      button: '',
    },
    {
      url: '/bg_3.jpg',
      title: 'Connect with Us',
      prefix: 'Get in touch with us',
      description: 'Know more about us',
      button: '',
    },
  ]
  return (
    <>
    <Carousel fade>
      {carouselContent.map((item, index) => {
        return(<Carousel.Item key={index}>
          <Image src={item.url} alt={item.title} width={2600} height={700} className={styles.imageCarousel} />
          <Carousel.Caption>
            <h3 className={styles.prefix}>{item.prefix}</h3>
            <h2 className={styles.heading}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
            {item.button &&
            <p><button></button></p>
            }
          </Carousel.Caption>
        </Carousel.Item>
      );})}

    </Carousel>
    </>
  )
}

export default HomeCarousel;