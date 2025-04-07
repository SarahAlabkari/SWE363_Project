import React from 'react';
import DropdownMenu from '../components/DropdownMenu';
import CalendarComponent from '../components/CalendarComponent';
import './PlanExperience.css';

function PlanExperience() {
  return (
    <div className="experience-page">
      <div className="hero-section"
      style={{
        backgroundImage: "url('/desert.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <h1 className="hero-heading">Plan Your Experience!</h1>
      </div>

      <div className="form-section">
        <div className="dropdown-container">
          <DropdownMenu />
        </div>

        <div className="calendar-container">
          <p className="calendar-label">Choose a day for your activity!</p>
          <CalendarComponent />
        </div>
      </div>

      <div className="button-wrapper">
        <button className="explore-btn">Explore Activities</button>
      </div>
    </div>
  );
}

export default PlanExperience;
