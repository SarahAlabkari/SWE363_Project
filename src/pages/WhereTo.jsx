import React from 'react';
import DropdownMenu from '../components/DropdownMenu';
import CalendarComponent from '../components/CalendarComponent';
import './WhereTo.css';
import MenuBar from "../components/MenuBar";


function WhereTo() {

  const navLinks = [
    { label: "Home", path: "/pages/Home" },
    { label: "About", path: "/pages/About" },
    { label: "Where To?", path: "/WhereTo" },
    { label: "Find a Local", path: "/pages/TourGuides" },
    { label: "My Plan", path: "/pages/MyPlan" },
    { label: "Wishlist", path: "/pages/MyWishlist" },
    { label: "Login", path: "/" },
  ];

  return (
    
    <div className="experience-page">
      <MenuBar links={navLinks} />
      
      <div className="hero-section"
      style={{
        
        backgroundImage: "url('/Alula-Image.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <h1 className="hero-heading" >Plan Your Experience!</h1>
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

export default WhereTo;
