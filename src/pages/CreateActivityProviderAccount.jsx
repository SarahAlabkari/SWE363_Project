// Path: src/pages/CreateActivityProviderAccount.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // added for navigation
import './CreateAccountForm.css'; // Shared styles

const CreateActivityProviderAccount = () => {
  const navigate = useNavigate(); // hook to enable navigation

  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    maaroofNumber: '',
    phoneNumber: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate fields
  const validateForm = () => {
    const { companyName, email, password, confirmPassword, maaroofNumber, phoneNumber } = formData;

    if (!companyName || !email || !password || !confirmPassword || !maaroofNumber || !phoneNumber) {
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

    const maaroofRegex = /^\d+$/;
    if (!maaroofRegex.test(maaroofNumber)) {
      return 'Maaroof number must contain only digits';
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
      alert('Activity Provider account created successfully!');
      setTimeout(() => {
        navigate('/Login'); // redirect to login after 2 seconds
      }, 2000);
    }
  };

  return (
    <div className="account-form">
      <h1 className="account-form-title">Create Account</h1>
      <p className="account-form-subtitle">As an Activity Provider</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="input-pair">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="e.g., Adventure Arabia"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-pair">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="e.g., provider@example.com"
            value={formData.email}
            onChange={handleChange}
            required
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
            required
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
            required
          />
        </div>

        <div className="input-pair">
          <label>Maaroof Number</label>
          <input
            type="text"
            name="maaroofNumber"
            placeholder="e.g., 987654"
            value={formData.maaroofNumber}
            onChange={handleChange}
            required
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
            required
          />
        </div>

        {/* Error message display */}
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

export default CreateActivityProviderAccount;
