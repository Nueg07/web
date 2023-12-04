// Service.js
import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/LandingPage.css'
const Service = () => (
          <section id="service">
          <div className="service">
            <div className="service-desc">
              <h1>Layanan Kami</h1>
            </div>
            <Container>
              <div className="row">
                <div className="col">
                  <div className="card" style={{ width: '14rem', backgroundColor: '#2b2a4c', color: 'white' }}>
                    <img src="Assest/education-removebg.png" className="card-img-top bg-danger" alt="..." />
                    <div className="card-body">
                      <h1 className="card-text">
                        <a href="Sign-In.html">Edukasi</a>
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Add similar code for other service cards */}
              </div>
            </Container>
          </div>
        </section>
);

export default Service;
