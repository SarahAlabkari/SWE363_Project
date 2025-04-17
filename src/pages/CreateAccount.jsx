// Path: src/Components/CreateAccount.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './CreateAccount.css'; // Importing the styles for the create account form

const CreateAccount = () => {
  return (
    <div className="create-account-container">
      {/* Title of the form */}
      <h1 className="create-account-title">Create Account</h1>

      {/* Button container for the 3 options */}
      <div className="create-account-buttons">
        {/* I'm a Tourist button */}
        <Link to="/CreateTouristAccount" className="create-account-button">
          <img
            src="/Tourist_Icon.png"
            alt="Tourist Icon"
            className="create-account-icon"
          />
          <span className="button-text-typeI">I'm a Tourist</span>
        </Link>

        {/* I'm a Local button (Tour Guide) */}
        <Link to="/CreateTourGuideAccount" className="create-account-button">
          <img
            src="/Tour_Guide_Icon.png"
            alt="Tour Guide Icon"
            className="create-account-icon"
          />
          <span className="button-text-typeI">I'm a Local</span>
        </Link>

        {/* I'm an Activity Provider button */}
        <Link to="/CreateActivityProviderAccount" className="create-account-button">
          <img
            src="/Activity_Provider.png"
            alt="Activity Provider Icon"
            className="create-account-icon"
          />
          <span className="button-text-typeII">I'm an Activity <br /> Provider</span>
        </Link>
      </div>

      {/* Already have an account? link */}
      <p className="create-account-link">
        Already have an account? <Link to="/Login">Login</Link>
      </p>
    </div>
  );
};

export default CreateAccount;

