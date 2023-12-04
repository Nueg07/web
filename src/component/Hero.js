// Hero.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/LandingPage.css'
const Hero = () => (
          <Container>
          <p style={{ fontSize: '22px' }}>
            Sekaranglah waktunya untuk melawan kekerasan dan bangkit mengatasinya.
          </p>
          <h3>
            <strong>Karena kamu sangat berharga</strong>
          </h3>
          <br />
          <Button variant="danger" href="Sign-In.html">
            Memulai
          </Button>
        </Container>
     
);

export default Hero;
