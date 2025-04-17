// Path: src/pages/CreateTourGuideAccount.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Added for navigation
import './CreateAccountForm.css'; // Shared layout and style

const CreateTourGuideAccount = () => {
  const navigate = useNavigate(); // Navigation hook

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    nationalId: '',
    phoneNumber: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  // Update form data state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form inputs before submission
  const validateForm = () => {
    const {
      username,
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      nationalId,
      phoneNumber,
    } = formData;

    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword ||
      !firstName ||
      !lastName ||
      !nationalId ||
      !phoneNumber
    ) {
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

    const idRegex = /^\d{10}$/;
    if (!idRegex.test(nationalId)) {
      return 'National ID must be exactly 10 digits';
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
      setErrorMessage(error);
    } else {
      setErrorMessage('');
      alert('Tour Guide account created successfully!');
      setTimeout(() => {
        navigate('/Login'); // Redirect after 2 seconds
      }, 2000);
    }
  };

  return (
    <div className="account-form">
      <h1 className="account-form-title">Create Account</h1>
      <p className="account-form-subtitle">As a Tour guide</p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Username */}
        <div className="input-pair">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="e.g., tour_guide_123"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="input-pair">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="e.g., guide@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="input-pair">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Min 6 characters"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="input-pair">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Retype your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* First Name */}
        <div className="input-pair">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="e.g., Ahmed"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="input-pair">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="e.g., Al-Qahtani"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* National ID */}
        <div className="input-pair">
          <label>National ID</label>
          <input
            type="text"
            name="nationalId"
            placeholder="e.g., 1234567890"
            value={formData.nationalId}
            onChange={handleChange}
            maxLength="10"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="input-pair">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="e.g., 05XXXXXXXX"
            value={formData.phoneNumber}
            onChange={handleChange}
            maxLength="10"
            required
          />
        </div>

        {/* Show error if any */}
        {errorMessage && (
          <p style={{ color: 'red', gridColumn: 'span 2', textAlign: 'center' }}>
            {errorMessage}
          </p>
        )}

        {/* Submit */}
        <button type="submit" className="create-btn">Create</button>
      </form>
    </div>
  );
};

export default CreateTourGuideAccount;
