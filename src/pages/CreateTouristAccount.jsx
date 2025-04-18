// Path: src/pages/CreateTouristAccount.jsx

import React, { useState } from 'react'; // React and useState for form state management
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './CreateAccountForm.css'; // Importing the shared styles for account creation

const CreateTouristAccount = () => {
  const navigate = useNavigate(); // Hook for redirection

  // Initial state for form fields
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
  });

  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  // Handle input changes for all fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form inputs before submission
  const validateForm = () => {
    const { username, email, password, confirmPassword, fullName, phoneNumber } = formData;

    // Check if any field is empty
    if (!username || !email || !password || !confirmPassword || !fullName || !phoneNumber) {
      return 'All fields are required';
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    // Validate password length
    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }

    // Validate Saudi phone number starting with 05
    const phoneRegex = /^05\d{8}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return 'Phone number must start with 05 and be 10 digits long';
    }

    return ''; // No errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setErrorMessage(error); // Show error if any
    } else {
      setErrorMessage('');
      alert('Tourist account created successfully!'); // Success feedback

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate('/Login');
      }, 2000);
    }
  };

  return (
    <div className="account-form">

      {/* Logo at the top */}
      <img 
        src="../jadwill logo.png" 
        alt="Jaddwill Logo" 
        className="page-logo"
      />
      
      {/* Page Title */}
      <h1 className="account-form-title">Create Account</h1>
      <p className="account-form-subtitle">As a Tourist</p>

      {/* Account creation form */}
      <form onSubmit={handleSubmit} noValidate>

        {/* Username Field */}
        <div className="input-pair">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="e.g., traveler_2024"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        {/* Email Field */}
        <div className="input-pair">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="e.g., tourist@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Password Field */}
        <div className="input-pair">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Min 6 characters"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Confirm Password Field */}
        <div className="input-pair">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Retype your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        {/* Full Name Field */}
        <div className="input-pair">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="e.g., Ahmed Al-Qahtani"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        {/* Phone Number Field */}
        <div className="input-pair">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="e.g., 05XXXXXXXX"
            value={formData.phoneNumber}
            onChange={handleChange}
            maxLength="10" // Limit input length to 10 digits
          />
        </div>

        {/* Display Error Message if exists */}
        {errorMessage && (
          <p style={{ color: 'red', gridColumn: 'span 2', textAlign: 'center' }}>
            {errorMessage}
          </p>
        )}

        {/* Submit Button */}
        <button type="submit" className="create-btn">Create</button>
      </form>
    </div>
  );
};

export default CreateTouristAccount;
