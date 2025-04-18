// Path: src/pages/TourCenter.jsx

import React from "react";
import MenuBar from "../components/MenuBar";
import CalendarView from "../components/CalendarView"; // Already implemented
import "./GuideDashboard.css"; // Reuse title styling
import "./TourCenter.css"; // Custom styles for this page
import CardSlider from "../components/CardSlider";
import Activity from "../components/Activity";

const TourCenter = () => {
  const navLinks = [
    { label: "Home", path: "/Home" },
    { label: "About", path: "/About" },
    { label: "Profile", path: "GuideProfile" },
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

          <div>
              <CardSlider>
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
              
              </CardSlider>
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
