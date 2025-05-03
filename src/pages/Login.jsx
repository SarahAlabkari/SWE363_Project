// Path: src/pages/Login.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handle login submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailOrUsername || !password) {
      setErrorMessage('Please fill in both fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ identifier: emailOrUsername, password })
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message || 'Login failed');
        return;
      }

      // Redirect user based on their role
      switch (data.role) {
        case 'admin':
          navigate('/AdminDashboard');
          break;
        case 'tourist':
          navigate('/Home');
          break;
          case 'guide':
            localStorage.setItem('guideId', data.guide.id); // ✅ Correct ID key from backend
            localStorage.setItem('loggedInGuideUsername', emailOrUsername); // ✅ Save username/email used
            navigate('/GuideDashboard');
            break;
          
        case 'provider':
          navigate('/Events');
          break;
        default:
          setErrorMessage('Unknown role');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <img src="../jadwill logo.png" alt="Jaddwill Logo" className="page-logo" />
      <h1 className="login-title">Login</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username or Email"
          className="login-input"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="forgot-password">
          
        </div>

        <button type="submit" className="login-button">Login</button>

        <p className="create-account">
          Don’t have an account? <Link to="/CreateAccount">Create one</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
