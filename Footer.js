import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaPinterest, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../css/Footer.css'; 

const Footer = () => (
  <footer className="bg-footer text-light py-5">
    <Container>
      <Row className="align-items-start">
        <Col md={6} sm={12} className="mb-4">
          <h1 className="footer-logo">Grace <span className="footer-sub">Beauty Parlour</span></h1>
          <p>
            With over <strong>10 years</strong> of styling experience in the industry our parlour has offered
            an unmatched degree of <strong>client appreciation</strong>. Our experienced staff at Parlour is
            highly trained, passionate about their craft, skillful and compassionate.
          </p>
        </Col>

        <Col md={6} sm={12}>
          <h5 className="text-uppercase fw-bold mb-3">Contact</h5>
          <address>
            Plot.No.85/B, Ramanagar,<br />
            G Square, Anna Road,<br />
            Madurai, Tamilnadu 600021<br /><br />
            Ph : 9423-990033
          </address>
        </Col>
      </Row>

      <hr className="border-light" />

      <Row className="justify-content-between align-items-center">
        <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
          <small>
            Copyrights © 2021 All Rights Reserved by Grace Beauty Parlour. 
            Design And Developed By VM.
          </small>
        </Col>
        <Col md={6} className="text-center text-md-end">
          <a href="https://facebook.com" className="text-light me-3"><FaFacebookF /></a>
          <a href="https://pinterest.com" className="text-light me-3"><FaPinterest /></a>
          <a href="https://instagram.com" className="text-light me-3"><FaInstagram /></a>
          <a href="https://youtube.com" className="text-light"><FaYoutube /></a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
