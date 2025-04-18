import React, { useState, useEffect } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import MenuBar from "../components/MenuBar";
import CardSlider from "../components/CardSlider";
import Activity from "../components/Activity";
import DropdownMenu from "../components/DropdownMenu";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ExploreActivities = () => {
  const navLinks = [
    { label: "Home", path: "/Home" },
    { label: "About", path: "/About" },
    { label: "Where To?", path: "/WhereTo" },
    { label: "Find a Local", path: "/TourGuides" },
    { label: "My Plan", path: "/MyPlan" },
    { label: "Wishlist", path: "/MyWishlist" },
    { label: "Login", path: "/" },
  ];

  const [destination, setDestination] = useState("Alula");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const mockData = {
      destination: "Alula",
      description: "Explore ancient tombs, sandstone mountains, and the hidden beauty of Alula with guided experiences."
    };

    setDestination(mockData.destination);
    setDescription(mockData.description);
  }, []);

  return (
    <div className="explore-activities-page">
      <MenuBar links={navLinks} />

      <h2 className="text-center fw-bold mt-4" style={{ color: '#584335' }}>Explore Activities!</h2>

      {/* Hero Banner */}
      <div
        className="hero-banner my-4"
        style={{
          backgroundColor: "#eee",
          padding: "40px",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h1 className="fw-bold" style={{ color: '#584335' }}>{destination}</h1>
        <p className="text-muted">{description}</p>
      </div>

     {/* Filters Row */}
<div className="d-flex justify-content-between px-4 mb-3 align-items-center flex-wrap gap-3">
  <div style={{ width: "fit-content" }}>
    <DropdownMenu />
  </div>

  <div style={{ width: "fit-content" }}>
    <label className="d-block mb-1" style={{ fontSize: '14px', color: '#5c4033', textAlign: 'left' }}>
      Find your perfect day!
    </label>
    <div className="position-relative">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="mm/dd/yyyy"
        className="form-control pe-4"
      />
      <span
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          fontSize: "16px",
          color: "#6c757d",
          pointerEvents: "none"
        }}
      >
        📅
      </span>
    </div>
  </div>
</div>



      {/* Activity Cards */}
      <div className="px-4 pb-5">
        <CardSlider>
          <Activity customLink="/ViewActivity" />
          <Activity customLink="/ViewActivity" />
          <Activity customLink="/ViewActivity" />
        </CardSlider>

        <CardSlider>
          <Activity customLink="/ViewActivity" />
          <Activity customLink="/ViewActivity" />
          <Activity customLink="/ViewActivity" />
        </CardSlider>

        <CardSlider>
          <Activity customLink="/ViewActivity" />
          <Activity customLink="/ViewActivity" />
          <Activity customLink="/ViewActivity" />
        </CardSlider>
      </div>
    </div>
  );
};

export default ExploreActivities;
