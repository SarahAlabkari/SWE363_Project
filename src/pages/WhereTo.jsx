import React from 'react';
import DropdownMenu from '../components/DropdownMenu';
import CalendarComponent from '../components/CalendarComponent';
import './WhereTo.css';
import MenuBar from "../components/MenuBar";
import { Link } from 'react-router-dom';



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

        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', paddingRight: '60px' }}>
  <div
    style={{
      backgroundColor: '#e5e3d4',
      borderRadius: '20px',
      padding: '16px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transform: 'scale(0.9)',
      transformOrigin: 'top right',
      width: '400px',
      marginTop: '-100px' 
    }}
  >
    <p className="calendar-label" style={{ textAlign: 'center', marginBottom: '10px' }}>
      Choose a day for your activity!
    </p>
    <CalendarComponent />
  </div>
</div>

      </div>

      <div className="button-wrapper"style={{ marginTop: '-60px' }}>
      <Link to="/ExploreActivities">
        <button className="explore-btn">Explore Activities</button>
        </Link>
      </div>
    </div>
  );
}

export default WhereTo;
