import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <nav className="navbar">
          <img src="/jadwill logo.png" alt="Logo" className="navbar-logo" />

          <div className="navbar-links">
            <NavLink to="/home" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
            <NavLink to="/profile" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Profile</NavLink>
            <NavLink to="/reservations" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Reservations</NavLink>
            <NavLink to="/eventshistory" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Events History</NavLink>
            <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Sign Out</NavLink>
          </div>

          <img src="/camels.png" alt="Camels" className="navbar-camels" />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;