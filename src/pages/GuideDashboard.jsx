// Path: src/pages/GuideDashboard.jsx

import React from "react";
import CalendarComponent from "../components/CalendarComponent";
import ActivitiesCarousel from "../components/ActivitiesCarousel";
import GuideReviews from "../components/GuideReviews";
import TourStatistics from "../components/TourStatistics";
import GuideTopTours from "../components/GuideTopTours";
import MenuBar from "../components/MenuBar";
import "./GuideDashboard.css";
import Activity from "../components/Activity";
import Tour from "../components/Tour";
import CardSlider from "../components/CardSlider";
import EarningPerMonth from "../components/EarningPerMonth"; // Earning / Month component

const GuideDashboard = () => {
  const navLinks = [
    { label: "Home", path: "/Home" },
    { label: "About", path: "/About" },
    { label: "Profile", path: "" },
    { label: "Dashboard", path: "/GuideDashboard" },
    { label: "Tour Center", path: "" },
  ];

  return (
    <div>
      <MenuBar links={navLinks} />
      <div>
        <main className="d-flex flex-column" style={{ margin: '3rem', gap: '5rem' }}>

          {/* First row: calendar and activities */}
          <div className="d-flex" id='dashboardRow1' style={{ justifyContent: 'space-around', gap: '10rem' }}>
            <div>
              <div style={{ width: '2rem' }}>
                <CalendarComponent />
              </div>
            </div>
            <div className="d-flex flex-column">
              <div>
                <p className="section-title">Happining on this day</p>
                <CardSlider>
                  <Activity />
                  <Activity />
                  <Activity />
                </CardSlider>
              </div>
              <div>
                <p className="section-title">Happining on this month</p>
                <CardSlider>
                  <Tour />
                  <Tour />
                  <Tour />
                </CardSlider>
              </div>
            </div>
          </div>

          {/* Second row: statistics and reviews */}
          <div className="d-flex" id="dashboardRow2" style={{ justifyContent: 'space-around', gap: '5rem' }}>
            <div>
              <p className="section-title">How many?</p>
              <TourStatistics />
            </div>

            <div>
              <p className="section-title">Reviews</p>
              <GuideReviews />
            </div>
          </div>

          {/* Third row: earning and top attended tours */}
          <div className="d-flex" id="dashboardRow3" style={{ justifyContent: 'space-around', gap: '5rem' }}>
            <div>
              <EarningPerMonth />
            </div>

            <div>
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

