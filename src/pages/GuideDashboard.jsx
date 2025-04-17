// Path: src/pages/GuideDashboard.jsx

import React from "react";
import CalendarComponent from "../components/CalendarComponent";
import GuideReviews from "../components/GuideReviews";
import TourStatistics from "../components/TourStatistics";
import GuideTopTours from "../components/GuideTopTours";
import MenuBar from "../components/MenuBar";
import Activity from "../components/Activity";
import Tour from "../components/Tour";
import CardSlider from "../components/CardSlider";
import EarningPerMonth from "../components/EarningPerMonth"; // Earning / Month component
import "./GuideDashboard.css"; // Optional: where you put your scrollbar styling

const GuideDashboard = () => {
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
      <div className="min-vh-100">
        <main
          className="d-flex flex-column"
          style={{
            padding: '3rem 2rem',
            gap: '5rem',
          }}
        >
          {/* First row: calendar and activities */}
          <div
            className="d-flex flex-wrap"
            id="dashboardRow1"
            style={{
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '3rem',
              width: '100%',
            }}
          >
            {/* Calendar */}
            <div style={{ flex: '1', minWidth: '300px' }}>
              <CalendarComponent />
            </div>

            {/* Sliders */}
            <div style={{ flex: '2', minWidth: 0 }}>
              <p className="section-title">Happining on this day</p>
              <CardSlider>
                <Activity />
                <Activity />
                <Activity />
              </CardSlider>

              <p className="section-title mt-5">Happining on this month</p>
              <CardSlider>
                <Tour />
                <Tour />
                <Tour />
              </CardSlider>
            </div>
          </div>

          {/* Second row: statistics and reviews */}
          <div
            className="d-flex flex-wrap"
            id="dashboardRow2"
            style={{
              justifyContent: 'space-between',
              gap: '3rem',
            }}
          >
            <div style={{ flex: '1', minWidth: '300px' }}>
              <p className="section-title">How many?</p>
              <TourStatistics />
            </div>

            <div style={{ flex: '1', minWidth: '300px' }}>
              <p className="section-title">Reviews</p>
              <GuideReviews />
            </div>
          </div>

          {/* Third row: earning and top attended tours */}
          <div
            className="d-flex flex-wrap"
            id="dashboardRow3"
            style={{
              justifyContent: 'space-between',
              gap: '3rem',
            }}
          >
            <div style={{ flex: '1', minWidth: '300px' }}>
              <EarningPerMonth />
            </div>

            <div style={{ flex: '1', minWidth: '300px' }}>
              <p className="section-title">Top 3 Attended Tours</p>
              <GuideTopTours />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GuideDashboard;
