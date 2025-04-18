// Path: src/pages/Login.jsx

import React, { useState } from 'react'; // Import useState for managing component state
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation links and useNavigate for programmatic navigation
import './Login.css'; // Import styling for the login page

const Login = () => {
  // State variables for form fields and error message
  const [email, setEmail] = useState(''); // State for email or username input
  const [password, setPassword] = useState(''); // State for password input
  const [errorMessage, setErrorMessage] = useState(''); // State for displaying any error messages
  const navigate = useNavigate(); // Hook to programmatically navigate after login

  // Simulated users database (hardcoded users for this project)
  const users = [
    { email: 'admin@jadwill.com', username: 'admin', password: 'admin123', redirectPath: '/admin-dashboard' },
    { email: 'provider@jadwill.com', username: 'provider', password: 'provider123', redirectPath: '/Events' },
    { email: 'guide@jadwill.com', username: 'guide', password: 'guide123', redirectPath: '/GuideDashboard' },
    { email: 'tourist@jadwill.com', username: 'tourist', password: 'tourist123', redirectPath: '/Home' },
  ];

  // Function to handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form refresh behavior

    // Try to find a matching user (check by email OR username and matching password)
    const foundUser = users.find(
      (user) =>
        (user.email === email || user.username === email) && user.password === password
    );

    // Form validation and error handling
    if (!email || !password) {
      setErrorMessage('Please fill in both fields');
    } else if (!foundUser) {
      setErrorMessage('Your username or password is incorrect');
    } else {
      setErrorMessage('');
      // Simulate 2 seconds delay before navigating (to mimic real login experience)
      setTimeout(() => {
        navigate(foundUser.redirectPath); // Redirect user to their specific landing page
      }, 2000);
    }
  };

  return (
    <div className="login-container">
      
      {/* Logo displayed at the top */}
      <img 
        src="../jadwill logo.png" 
        alt="Jaddwill Logo" 
        className="page-logo"
      />
      
      {/* Login page title */}
      <h1 className="login-title">Login</h1>

      {/* Login form */}
      <form className="login-form" onSubmit={handleSubmit}>
        
        {/* Username or Email input field */}
        <input
          type="text"
          placeholder="Username or Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password input field */}
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Conditionally render error message if exists */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Link to forgot password page */}
        <p className="forgot-password">
          <Link to="/ForgetPassword">Forgot Password?</Link>
        </p>

        {/* Submit button to log in */}
        <button type="submit" className="login-button">
          Login
        </button>

        {/* Link to create account page */}
        <p className="create-account">
          Don’t have an account? <Link to="/CreateAccount">Create one</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
