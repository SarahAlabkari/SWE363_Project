// Path: src/pages/ResetPassword.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResetPassword.css'; // Import the CSS styles for this component

const ResetPassword = () => {
  // State variables to track input fields
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for error and success messages
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // React Router's navigation hook for redirection
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior

    // Validate that passwords match
    if (newPassword !== confirmPassword) {
      setErrorMessage('The entered passwords do not match');
      setSuccessMessage('');
    }
    // Validate password length (minimum 6 characters as an example)
    else if (newPassword.length < 6) {
      setErrorMessage('The entered password is invalid (minimum 6 characters)');
      setSuccessMessage('');
    }
    // If valid, clear errors and show success
    else {
      setErrorMessage('');
      alert('Your password has been updated successfully!');


      // Optional: Automatically redirect to login after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Delay in milliseconds (2 seconds)
    }
  };

  return (
    <div className="reset-password-container">
      {/* Page Title */}
      <h1 className="reset-password-title">Reset Password</h1>

      {/* Password Reset Form */}
      <form className="reset-password-form" onSubmit={handleSubmit}>
        {/* New Password Input */}
        {/* <label htmlFor="newPassword" className="reset-password-label">New Password</label> */}
        <input
          type="password"
          id="newPassword"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="reset-password-input"
        />

        {/* Confirm Password Input */}
        {/* <label htmlFor="confirmPassword" className="reset-password-label">Confirm Password</label> */}
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="reset-password-input"
        />

        {/* Error Message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Success Message */}
        {successMessage && <p className="success-message">{successMessage}</p>}

        {/* Submit Button - disabled unless both fields are filled */}
        <button
          type="submit"
          className="reset-password-button"
          disabled={!newPassword || !confirmPassword}
        >
          Reset Password
        </button>
      </form>

      {/* Back to Login Link */}
      <p className="back-to-login">
        <Link to="/Login">← Back to Login</Link>
      </p>
    </div>
  );
};

export default ResetPassword;
