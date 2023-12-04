// Contact.js
import React, { useState } from 'react';
import '../styles/LandingPage.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    noHp: '',
    pesan: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <section id="contact">
      <div className="contact">
        <div className="contact-desc">
          <p>Kontak</p>
          <p>Silahkan tinggalkan pesan dan kesan anda</p>
        </div>
        <div className="container2">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nama">Nama:</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="noHp">No.Hp:</label>
            <input
              type="text"
              id="noHp"
              name="noHp"
              value={formData.noHp}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="pesan">Pesan:</label>
            <textarea
              id="pesan"
              name="pesan"
              rows="4"
              cols="50"
              value={formData.pesan}
              onChange={handleInputChange}
              required
            ></textarea>

            <button type="submit">Kirim Pesan -&gt;</button>
          </form>
        </div>

        <br />
        <br />
        <br />
        <br />
        <p>Hubungi Kami</p>
        <p>Email: abuseshield@gmail.com</p>
        <p>No.Telephone: +62 810 7743 6210</p>
        <p>Follow us on social media</p>
        <div className="social-icons">
          {/* Add your social media icons here */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
