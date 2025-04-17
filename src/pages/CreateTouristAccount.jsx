// Path: src/pages/CreateTouristAccount.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Navigation import
import './CreateAccountForm.css'; // Shared styles

const CreateTouristAccount = () => {
  const navigate = useNavigate(); // Hook for redirection

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validateForm = () => {
    const { username, email, password, confirmPassword, fullName, phoneNumber } = formData;

    if (!username || !email || !password || !confirmPassword || !fullName || !phoneNumber) {
      return 'All fields are required';
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }

    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }

    const phoneRegex = /^05\d{8}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return 'Phone number must start with 05 and be 10 digits long';
    }

    return '';
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setErrorMessage(error); // Show error in form
    } else {
      setErrorMessage('');
      alert('Tourist account created successfully!'); // Success message
      setTimeout(() => {
        navigate('/Login'); // Redirect after 2 seconds
      }, 2000);
    }
  };

  return (
    <div className="account-form">
      <h1 className="account-form-title">Create Account</h1>
      <p className="account-form-subtitle">As a Tourist</p>

      <form onSubmit={handleSubmit} noValidate>
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

        <div className="input-pair">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="e.g., 05XXXXXXXX"
            value={formData.phoneNumber}
            onChange={handleChange}
            maxLength="10"
          />
        </div>

        {/* Error message (if any) */}
        {errorMessage && (
          <p style={{ color: 'red', gridColumn: 'span 2', textAlign: 'center' }}>
            {errorMessage}
          </p>
        )}

        <button type="submit" className="create-btn">Create</button>
      </form>
    </div>
  );
};

export default CreateTouristAccount;
