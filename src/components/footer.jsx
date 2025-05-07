import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../images/manyavar logo.webp';

const Footer = () => {
  const linkStyle = { color: 'white', textDecoration: 'none', fontSize: '16px' };
  

  return (
    <div style={{ background: 'linear-gradient(to right, #2c0303, #a42e1f)', color: 'white', paddingTop: '40px', paddingBottom: '20px' }}>
      <Container>
       
        <Row className="mb-4 text-center justify-content-center">
          <Col md={12}>
            <img src={logo} alt="Manyavar Mohey Logo" style={{ width: "300px", height: "auto" }} />
          </Col>
        </Row>

        
        <Row className="mb-4">
          <Col md={3}>
            <h5>CATEGORIES</h5>
            <ul className="list-unstyled">
              {['Kurta Pajama', 'Kurta Jacket Sets', 'Only Kurtas', 'Nehru Jackets', 'Indo Western', 'Sherwani', 'Lehenga', 'Saree', 'Kidswear', 'Accessories'].map(item => (
                <li key={item}><a href="#" style={linkStyle}>{item}</a></li>
              ))}
            </ul>
          </Col>

          <Col md={2}>
            <h5>SUPPORT</h5>
            <ul className="list-unstyled">
              {['Track Order', 'Contact Us', 'My Account'].map(item => (
                <li key={item}><a href="#" style={linkStyle}>{item}</a></li>
              ))}
            </ul>
          </Col>

          <Col md={2}>
            <h5>QUICK LINKS</h5>
            <ul className="list-unstyled">
              {['About Us', 'Brand Story', 'Blogs', 'Careers', 'Book a Video Call', 'Store Locator'].map(item => (
                <li key={item}><a href="#" style={linkStyle}>{item}</a></li>
              ))}
            </ul>
          </Col>

          <Col md={2}>
            <h5>OUR POLICIES</h5>
            <ul className="list-unstyled">
              {['FAQs', 'Shipping Details', 'Return, Exchange and Refund Policy', 'Terms of Use', 'Privacy Policy', 'Cookie Policy'].map(item => (
                <li key={item}><a href="#" style={linkStyle}>{item}</a></li>
              ))}
            </ul>
          </Col>

          <Col md={3}>
            <h5>CONTACT</h5>
            <p><a href="mailto:amarnath2893@gmail.com" style={linkStyle}>amarnath2893@gmail.com</a></p>
          
            <p>+91 8319960075 (India)</p>
            <p>10 am – 7 pm, Mon – Sat</p>

            <h5 className="mt-3">KEEP IN TOUCH</h5>
            <div className="d-flex gap-3">
              <a href="#" style={linkStyle}><FaFacebookF /></a>
              <a href="#" style={linkStyle}><FaTwitter /></a>
              <a href="#" style={linkStyle}><FaInstagram /></a>
              <a href="#" style={linkStyle}><FaLinkedinIn /></a>
              <a href="#" style={linkStyle}><FaYoutube /></a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="text-center">
          <Col>
            <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
            <p className="mb-0">&copy; 2025 AmarNath. All rights reserved.</p>
            <p className="mb-0">100% Secure Payments | Visa, MasterCard, UPI, NetBanking</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
