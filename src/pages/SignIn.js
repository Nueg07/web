import React from 'react'
import { Link } from 'react-router-dom';
import susi from '../Aseets/SUSI.png';
import '../styles/SignIn.css'

const SignIn = () => {
  return (
    <div>
        <title>Sign In</title>
      <img src={susi} alt="SUSI" />

      <div className="login-form">
        <h1>Abuse</h1>
        <h2>Shield</h2>
        <h3>Sign In</h3>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>
          <Link to="/Landing-page">Sign In</Link>
        </button>

        <div className="Sign-up">
          <p>
            Belum punya akun?
            <Link to="/sign-up">Daftar</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
