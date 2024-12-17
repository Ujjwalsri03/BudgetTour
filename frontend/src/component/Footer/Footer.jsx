import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap'

import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'


const quik__links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/tours',
    display: 'Tours',
  },
];

const quik__links2 = [
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
];


const Footer = () => {

  const year = new Date().getFullYear
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="footer_logo">
              <img src={logo} alt="" />
              <p>We believe in a travelling experience by providing our tour plan that suits your the best!</p>

              <div className="social__link d-flex align-item-center gap-4">
             

                <span  className='socials'>
                  <Link to='https://github.com/Ujjwalsri03'><i class="ri-github-fill"></i></Link>
                  <Link to='www.linkedin.com/in/ujjawal-shriwastav-985378247/'><i class="ri-linkedin-fill"></i></Link>
                
                </span>

                
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>

            <ListGroup className='footer__quik-links'>
              {quik__links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Quick Links</h5>

            <ListGroup className='footer__quik-links'>
              {quik__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Contact</h5>

            <ListGroup className='footer__quik-links'>
                <ListGroupItem  className='ps-0 border-0 d-flex align-item-center gap-3'>
                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  Address:
                </h6>
                <p>Siwan-841435, Bihar</p>
                </ListGroupItem>

                <ListGroupItem  className='ps-0 border-0 d-flex align-item-center gap-3'>
                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  Email:
                </h6>
                <p>ujjawalshriwastav9771@gmail.com</p>
                </ListGroupItem>

                <ListGroupItem  className='ps-0 border-0 d-flex align-item-center gap-3'>
                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-phone-fill"></i></span>
                  Phone:
                </h6>
                <p>+91 6307321952</p>
                </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center  pt-5'>
            <p className='copyright'>Copyright {year}, design and develop by @Ujjwal😊.  All rights reserved.</p>
          </Col>
        </Row>
      </Container>

    </footer>
  )
}

export default Footer;