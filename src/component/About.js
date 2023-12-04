// About.js
import React from 'react';
import '../styles/About.css'

const About = () => (
<section id="about">
    <div className="about">
      <div className="about-desc">
        <h1>Tentang Kami</h1>
      </div>
      <div className="row-about">
        <div className="column">
          <p>
            Kami membantu orang-orang melaporkan, mendokumentasikan, dan menangani kasus-kasus
            penindasan.
            <br />
            <br />
            Tujuan situs web ini adalah untuk memberikan dukungan kepada para korban, memfasilitasi
            pelaporan insiden pelanggaran, dan mendorong tindakan atau intervensi penegakan keadilan
            yang diperlukan.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
