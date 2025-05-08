import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import imgLeft from '../Images/Aboutusimg.png';   
import imgRight from '../Images/Aboutusimg2.png';
import { FaUserAlt } from 'react-icons/fa'; 

const About = () => (
  <section id="about" className="py-5 bg-white">
    <Container>
      <Row className="align-items-center text-center">
      
        <Col md={4}>
          <Image src={imgLeft} fluid rounded />
        </Col>

        <Col md={4}>
          <div className="mb-3">
            <FaUserAlt size={40} color="#D4AF37" />
          </div>
          <h2 className="mb-3">ABOUT US</h2>
          <hr style={{ width: '40px', borderTop: '3px solid #000', margin: 'auto' }} />
          <p className="mt-4 text-muted">
            We offer makeup services to women. Our bright and well-designed Grace Beauty Parlour is a great inspiration for purity and modernity. Bridal Service provides the ultimate luxury experience, whether it’s the perfect blowout, flawless makeup, a high-shine manicure, or expertly sculpted brows. Bridal and Makeup Service is directed by Rashmi Makeup Artist.
          </p>
        </Col>

      
        <Col md={4}>
          <Image src={imgRight} fluid rounded />
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
