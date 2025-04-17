// Path: src/pages/Login.jsx

import React, { useState } from 'react'; // Import useState for managing form state
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Login.css'; // Importing the styles for the login form

const Login = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy validation for demonstration purposes
    if (email === '' || password === '') {
      setErrorMessage('Please fill in both fields');
    } else if (email !== 'test@example.com' || password !== 'password123') {
      setErrorMessage('Your username or password is incorrect');
    } else {
      setErrorMessage('');
      // Add the successful login logic here (e.g., redirect to dashboard)
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username or Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Set email input value
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Set password input value
        />

        {/* Conditionally render error message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p className="forgot-password">
          <Link to="/ForgetPassword">Forgot Password?</Link>
        </p>

        <button type="submit" className="login-button">
          Login
        </button>

        <p className="create-account">
          Don’t have an account? <Link to="/CreateAccount">Create one</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
