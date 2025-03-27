import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css'; // Assuming you have a CSS file for styles

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call for authentication)
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email / Username</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email or username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>

      <div className="login-links">
        <Link to="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </Link>
        <p>
          Don't have an account? <Link to="/sign-up" className="sign-up-link">Sign up here</Link>
        </p>
      </div>

      <div className="security-message">
        <p>Your data is protected, and login is secure with our encrypted system.</p>
      </div>

      <div className="cta-message">
        <p>Log in to access your account, view your purchase history, and manage your profile.</p>
      </div>
    </div>
  );
}

export default LoginPage;
