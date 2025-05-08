import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Services.css'; 
import hairCare from '../Images/Haircare.png';
import skinCare from '../Images/skincare.png';
import bodyCare from '../Images/bodycare.png';
import bridal from '../Images/bridalimg1.png';
import hair from '../Images/hairoff.jpg';
import face from '../Images/faceoff.jpg';

const services = [
  {
    title: "HAIR CARE",
    desc: "From a simple trim to couture haircuts, and from a basic wash to luxury spa treatments",
    img: hairCare,
  },
  {
    title: "SKIN CARE",
    desc: "A face cleanup is important to keep your skin healthy, hydrated and glowing!",
    img: skinCare,
  },
  {
    title: "BODY CARE",
    desc: "De-stress and rejuvenate. Our body care experts are well trained in helping you.",
    img: bodyCare,
  },
  {
    title: "BRIDAL",
    desc: "We provide makeup, hair styling, saree draping and others services for your special day",
    img: bridal,
  },
];

const Services = () => (
  <section className="services-section py-5 bg-light" id="services">
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <div>
          <h2 className="fw-bold text-uppercase">
            <span className="gold-bar">|</span> OUR SERVICES
          </h2>
          <p className="text-muted fst-italic">We offer a wide range of beauty services</p>
        </div>
      </div>

      <Row className="text-center">
        {services.map((service, idx) => (
          <Col md={3} sm={6} xs={12} className="mb-4" key={idx}>
            <div>
              <img
                src={service.img}
                alt={service.title}
                className="rounded-circle mb-3 service-image"
              />
              <h5 className="fw-bold text-uppercase service-title">{service.title}</h5>
              <p className="text-muted small">{service.desc}</p>
            </div>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col md={6} className="mb-4">
          <div className="promo-card position-relative">
            <img
              src={hair}
              alt="hair"
              className="w-100 promo-img"
            />
            <div className="promo-text position-absolute bottom-0 start-0 p-3">
              <h5 className="text-light fw-bold">Full body + Rica Waxing Upto 20% Off</h5>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="promo-card position-relative">
            <img
              src={face}
              alt="face"
              className="w-100 promo-img"
            />
            <div className="promo-text position-absolute bottom-0 start-0 p-3">
              <h5 className="text-light fw-bold">
                Upto 20% Off Clean-up, Bleach, D-tan, Hair trimming, Hair setting
              </h5>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Services;
