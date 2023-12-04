import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUp.css';
import susi from '../Aseets/SUSI.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle user registration here
    console.log('Form data submitted:', formData);
    // You can make an API call to register the user, handle validation, etc.
  };

  return (
    <div>
      <div className="container">
        <div className="form">
          <h1>Abuse</h1>
          <h2>Shield</h2>
          <h3>Daftar</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Daftar</button>
          </form>
          <p>
            Sudah memiliki akun? <Link to="/sign-in">Masuk</Link>
          </p>
        </div>
        <div className="image">
        <img src={susi} alt="SUSI" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
