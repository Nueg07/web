// Navigation.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navigation.css'
const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img src="Assest/Logo.png" alt="" width="50" height="30" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#navbar">Beranda</Nav.Link>
          <Nav.Link href="#about">Tentang</Nav.Link>
          <Nav.Link href="#service">Layanan</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
          <Nav.Link href="#contact">Kontak</Nav.Link>
          <Nav.Link href="SignUp.html">
            <i className="bi bi-person-circle"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </Navbar>
);

export default Navigation;
