// Path: src/pages/CreateTourGuideAccount.jsx

import React, { useState } from 'react'; // Import React and useState hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation after successful signup
import './CreateAccountForm.css'; // Import shared layout and styles for account creation

const CreateTourGuideAccount = () => {
  const navigate = useNavigate(); // Hook to allow navigation

  // State to store form fields
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

  const [errorMessage, setErrorMessage] = useState(''); // State to store error messages

  // Update form data dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate all form fields before submission
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

    // Check if any required field is empty
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

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    // Check password minimum length
    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }

    // Validate national ID: exactly 10 digits
    const idRegex = /^\d{10}$/;
    if (!idRegex.test(nationalId)) {
      return 'National ID must be exactly 10 digits';
    }

    // Validate phone number: Saudi format (starts with 05 and 10 digits total)
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
      setErrorMessage(error); // Display validation error
    } else {
      setErrorMessage('');
      alert('Tour Guide account created successfully!'); // Success feedback

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
      
      {/* Title and Subtitle */}
      <h1 className="account-form-title">Create Account</h1>
      <p className="account-form-subtitle">As a Tour guide</p>

      {/* Form to capture guide registration details */}
      <form onSubmit={handleSubmit} noValidate>

        {/* Username Field */}
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

        {/* Email Field */}
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

        {/* Password Field */}
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

        {/* Confirm Password Field */}
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

        {/* First Name Field */}
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

        {/* Last Name Field */}
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

        {/* National ID Field */}
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

        {/* Phone Number Field */}
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

export default CreateTourGuideAccount;
