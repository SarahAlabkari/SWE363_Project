import React from 'react';
import '../styles/main.css';
import Navbar from '../components/Navbar';

const Profile = () => {
  return (
    <div className="page-container">
      <Navbar />

      {/* Header */}
      <h1 className="page-title">Welcome Skyward Journeys!</h1>

      {/* Top Card */}
      <div className="profile-header section">
        <img className="profile-logo" src="/logo-desert.png" alt="Company Logo" />
        <div className="profile-summary">
          <p className="body-text"><strong>Organization overview:</strong></p>
          <p className="body-text">
            Skyward Journeys is a premier travel agency dedicated to creating unforgettable travel experiences across the globe. We specialize in personalized vacation packages, cultural tours, and luxury getaways tailored to meet the unique preferences of each traveler.
          </p>
        </div>
      </div>

      {/* About Us */}
      <div className="section">
        <h2 className="section-title">About Us</h2>
        <p className="body-text">FOR FUN AND ADVENTURE</p>
      </div>

      {/* Contact Info */}
      <div className="section">
        <h2 className="section-title">Our Contact Info</h2>
        <p className="body-text">Email: xxxxxxx@gmail.com</p>
        <p className="body-text">Phone: 966xxxxxx - 966xxxxxxx</p>
        <p className="body-text">Telephone: 022xxxxxxxx</p>
      </div>

      {/* Services Offered */}
      <div className="section">
        <h2 className="section-title">Services Offered</h2>
        <div className="carousel">
          <button className="carousel-btn">&#8249;</button>
          <div className="services-list">
            <div className="service-box">Dune Bashing</div>
            <div className="service-box">Desert Camping</div>
            <div className="service-box">Stargazing</div>
            <div className="service-box">Henna Painting</div>
          </div>
          <button className="carousel-btn">&#8250;</button>
        </div>
      </div>

      {/* Certifications */}
      <div className="section">
        <h2 className="section-title">Certifications</h2>
        <div className="certs-list">
          <img className="cert-box" src="/images/cert1.png" alt="Certificate 1" />
          <img className="cert-box" src="/images/cert2.png" alt="Certificate 2" />
          <img className="cert-box" src="/images/cert3.png" alt="Certificate 3" />
        </div>
      </div>

      {/* Edit Button */}
      <button className="edit-button">Edit Profile</button>
    </div>
  );
};

export default Profile;
