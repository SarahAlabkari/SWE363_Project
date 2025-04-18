// Path: src/pages/CreateActivityProviderAccount.jsx

import React, { useState } from 'react'; // Import React and useState hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation after form submission
import './CreateAccountForm.css'; // Import shared account form styles

const CreateActivityProviderAccount = () => {
  const navigate = useNavigate(); // React Router hook to programmatically navigate

  // Form state initialization
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    maaroofNumber: '',
    phoneNumber: '',
  });

  const [errorMessage, setErrorMessage] = useState(''); // State for validation error messages

  // Update form data dynamically as the user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form fields before submission
  const validateForm = () => {
    const { companyName, email, password, confirmPassword, maaroofNumber, phoneNumber } = formData;

    // Check if any field is empty
    if (!companyName || !email || !password || !confirmPassword || !maaroofNumber || !phoneNumber) {
      return 'All fields are required';
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    // Check password length
    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }

    // Validate Maaroof number: must be digits only
    const maaroofRegex = /^\d+$/;
    if (!maaroofRegex.test(maaroofNumber)) {
      return 'Maaroof number must contain only digits';
    }

    // Validate Saudi phone number format
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
      setErrorMessage(error); // Set error if validation fails
    } else {
      setErrorMessage('');
      alert('Activity Provider account created successfully!'); // Show success message

      // Redirect to login after 2 seconds
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
      
      {/* Form title and subtitle */}
      <h1 className="account-form-title">Create Account</h1>
      <p className="account-form-subtitle">As an Activity Provider</p>

      {/* Form for account creation */}
      <form onSubmit={handleSubmit} noValidate>

        {/* Company Name Input */}
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

        {/* Email Input */}
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

        {/* Password Input */}
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

        {/* Confirm Password Input */}
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

        {/* Maaroof Number Input */}
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

        {/* Phone Number Input */}
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

        {/* Error Message (if any) */}
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

export default CreateActivityProviderAccount;
