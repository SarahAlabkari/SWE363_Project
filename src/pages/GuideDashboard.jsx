import React, { useEffect, useState } from "react";
import CalendarComponent from "../components/CalendarComponent";
import GuideReviews from "../components/GuideReviews";
import TourStatistics from "../components/TourStatistics";
import GuideTopTours from "../components/GuideTopTours";
import MenuBar from "../components/MenuBar";
import Activity from "../components/Activity";
import Tour from "../components/Tour";
import CardSlider from "../components/CardSlider";
import EarningPerMonth from "../components/EarningPerMonth";
import axios from "axios";
import "./GuideDashboard.css";

const GuideDashboard = () => {
  const navLinks = [
    { label: "Home", path: "/TourGuideHome" },
    { label: "About", path: "/TourGuideAbout" },
    { label: "Profile", path: "/GuideAccount" },
    { label: "Dashboard", path: "/GuideDashboard" },
    { label: "Tour Center", path: "/TourCenter" },
    { label: "Logout", path: "/Home" },
  ];

  const [tours, setTours] = useState([]);
  const username = "norah123"; // TODO: make dynamic from auth/localStorage later

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/tours/guide/${username}`)
      .then((res) => setTours(res.data))
      .catch((err) => console.error("Error fetching tours:", err));
  }, [username]);

  return (
    <div>
      <MenuBar links={navLinks} />

      <div className="min-vh-100">
        <main
          className="d-flex flex-column"
          style={{ padding: "3rem 2rem", gap: "5rem" }}
        >
          {/* Row 1: Calendar + Sliders */}
          <div
            className="flex flex-col lg:flex-row flex-wrap gap-12 w-full"
            id="dashboardRow1"
          >
            <div className="w-full lg:w-1/3 min-w-[300px]">
              <CalendarComponent />
            </div>

            <div className="w-full lg:w-2/3 min-w-[300px]">
              <p className="section-title">Happining on this day</p>
              <CardSlider>
                <Activity />
                <Activity />
                <Activity />
              </CardSlider>

              <p className="section-title mt-5">Happining on this month</p>
              <CardSlider>
                {tours.length > 0 ? (
                  tours.map((tour) => <Tour key={tour._id} tour={tour} />)
                ) : (
                  <p>No tours to show.</p>
                )}
              </CardSlider>
            </div>
          </div>

          {/* Row 2: Stats + Reviews */}
          <div className="container-fluid" id="dashboardRow2">
            <div className="row ms-lg-5">
              <div className="col-12 col-lg-5 d-flex flex-column">
                <p className="section-title">How many?</p>
                <TourStatistics />
              </div>
              <div className="col-12 col-lg-5 d-flex flex-column">
                <p className="section-title ms-lg-5">Reviews</p>
                <div className="ms-lg-5">
                  <GuideReviews />
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Earnings + Top Tours */}
          <div className="container-fluid" id="dashboardRow3">
            <div className="row align-items-start ms-lg-5">
              <div className="col-12 col-lg-5 ">
                <p className="section-title">Earning / Month</p>
                <div style={{ width: "100%" }}>
                  <EarningPerMonth />
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <p className="section-title ms-lg-5">Top 3 Attended Tours</p>
                <div style={{ width: "100%" }} className="ms-lg-5">
                  <GuideTopTours />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GuideDashboard;
