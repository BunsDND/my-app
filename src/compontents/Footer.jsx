// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Ensure this file exists for custom styles

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid> {/* Use fluid to make it full width */}
        <Row className="footer-content">
          <Col md={4} className="footer-section">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#about">Support</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Contact</h5>
            <p>Name: Tanutan, Vanni Louise C.</p>
            <p>Education: Junior - IT Student</p>
            <p>Email: <a href="mailto:itsmevance19@gmail.com">itsmevance19@gmail.com</a></p>
            <p>Phone: (+63) 9055618370</p>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Follow</h5>
            <ul className="list-unstyled">
              <li><a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/buns.louise">Facebook</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/BunsDND">Github</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bansee_html/">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col>
            <p className="text-muted">© 2025 Web2. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;