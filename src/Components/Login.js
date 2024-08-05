// src/Components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Assuming login is successful
    console.log('User logged in with email:', email);

    // Navigate to CartPage after successful login
    navigate('/cart');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className='btn btn-primary'>Login</button>
        <Link
            to="/register"
            type="submit"
            class="btn btn-primary"
            style={{ marginLeft: "10px" }}
          >
            Register
          </Link>
      </form>
    </div>
  );
};

export default Login;
