import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../css/Header.css'; 

const Header = () => (
  <>
    <Navbar bg="light" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#" className="logo-text">
          <span className="logo-main">Grace</span> <span className="logo-sub">Beauty Parlour</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Link to="home" smooth duration={500} className="nav-link custom-link">Home</Link>
            <Link to="about" smooth duration={500} className="nav-link custom-link">About</Link>
            <Link to="services" smooth duration={500} className="nav-link custom-link">Services</Link>
            <Link to="contact" smooth duration={500} className="nav-link custom-link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

export default Header;
