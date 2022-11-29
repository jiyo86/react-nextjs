import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.scss';

import logo from './vercel.svg';

export default function Header() {
  return (
    <>
    <div className={styles.wrap}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.bgWrap}>
              <div className="row">
                <div className={`col-md-6 ${styles.alignitemscenter}`}>
                  <div className={`mb-0 pl-md-2 ${styles.phone}`}>
                    <Link href="#" className={styles.mr2}><span className="fa fa-phone mr-1"></span> +00 1234 567</Link>
                    <Link href="#"><span className="fa fa-paper-plane mr-1"></span> youremail@email.com</Link>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-md-end">
                  <div className={styles.socialMedia}>
                    <div className="mb-0 d-flex">
                      <Link href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></Link>
                      <Link href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></Link>
                      <Link href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></Link>
                      <Link href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="/"><Image src={logo} alt="Home"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior><Nav.Link >Home</Nav.Link></Link>
            <Link href="/about" passHref legacyBehavior><Nav.Link >About</Nav.Link></Link>
            <Link href="/services" passHref legacyBehavior><Nav.Link >Services</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
