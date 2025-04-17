// Path: src/pages/ForgetPassword.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './ForgetPassword.css'; // Importing the styles for the Forget Password form

const ForgetPassword = () => {
  // State to track email input and feedback message
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // React Router's hook for navigation
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      // Show success message temporarily
      setMessage('A password reset link has been sent to your email');

      // Simulate "email sent" behavior by navigating to reset page
      setTimeout(() => {
        navigate('/ResetPassword');
      }, 1000); // Wait 1 second to show the message before navigating
    } else {
      setMessage('Please enter your email address');
    }
  };

  return (
    <div className="forget-password-container">
      {/* Page title displayed above the form box */}
      <h1 className="form-title">Forget your Password</h1>

      {/* Form container with white background */}
      <div className="form-container">
        {/* Instruction text */}
        <p className="form-subtitle">Enter the email address of your account</p>

        {/* Email input form */}
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />

          {/* Display message (success or validation) */}
          {message && <p className="form-message">{message}</p>}

          {/* Submit button */}
          <button type="submit" className="form-button">Send Request</button>
        </form>
      </div>

      {/* Link back to login page */}
      <p className="back-to-login">
        <Link to="/Login">← Back to Login</Link>
      </p>
    </div>
  );
};

export default ForgetPassword;
