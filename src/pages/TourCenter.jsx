// Path: src/pages/TourCenter.jsx

import React from "react";
import MenuBar from "../components/MenuBar";
import CalendarView from "../components/CalendarView"; // Already implemented
import "./GuideDashboard.css"; // Reuse title styling
import "./TourCenter.css"; // Custom styles for this page

const TourCenter = () => {
  const navLinks = [
    { label: "Home", path: "/Home" },
    { label: "About", path: "/About" },
    { label: "Profile", path: "" },
    { label: "Dashboard", path: "/GuideDashboard" },
    { label: "Tour Center", path: "/TourCenter" },
  ];

  return (
    <div>
      <MenuBar links={navLinks} />

      <main className="tour-center-main">
        {/* Top section: Your tour on */}
        <section className="tour-section">
          <p className="section-title">Your Tour On</p>
          <select className="tour-date-select">
            <option>Choose a date</option>
            {/* You can populate with actual dates */}
          </select>

          <div className="tour-carousel">
            {/* Placeholder cards (replace with dynamic components later) */}
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="tour-card">
                <div className="tour-image-placeholder"></div>
                <p className="tour-title">Event name</p>
                <div className="tour-actions">
                  <button className="tour-btn">Learn more</button>
                  <button className="tour-status">Status</button>
                </div>
              </div>
            ))}
          </div>

          <div className="tour-controls">
            <button className="tour-action-btn">Add event/s</button>
            <button className="tour-action-btn">Select</button>
            <button className="tour-action-btn">Delete event/s</button>
          </div>
        </section>

        {/* Bottom section: Calendar View */}
        <section>
          <p className="section-title">Calendar View</p>
          <CalendarView />
        </section>
      </main>
    </div>
  );
};

export default TourCenter;
