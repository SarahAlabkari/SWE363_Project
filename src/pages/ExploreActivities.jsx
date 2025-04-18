import React, { useState, useEffect } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import MenuBar from "../components/MenuBar";
import CardSlider from "../components/CardSlider";
import Activity from "../components/Activity";
import DropdownMenu from "../components/DropdownMenu";
import CalendarComponent from "../components/CalendarComponent";



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

      <h2 className="text-center fw-bold mt-4" style={{color:'#584335'}}>Explore Activities!</h2>

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
        <h1 className="fw-bold" style={{color:'#584335'}}>{destination}</h1>
        <p className="text-muted">
          {description}
        </p>
      </div>

      {/* Filter Row
      <div className="d-flex justify-content-between align-items-center px-4 mb-3 flex-wrap gap-2">
        <DropdownMenu />
        {/* <CalendarComponent /> */}
      {/* </div>*/} 

      <div className="d-flex justify-content-start px-4 mb-3">
  <div style={{ width: "fit-content" }}>
    <DropdownMenu />
  </div>
</div>


      {/* Activity Cards */}
      <div className="px-4 pb-5">
        {/* <CardSlider>
        <Activity customLink="/ViewActivity" />

          <Activity />
          <Activity />
        </CardSlider>

        <CardSlider>
          <Activity />
          <Activity />
          <Activity />
        </CardSlider>

        <CardSlider>
          <Activity />
          <Activity />
          <Activity />
        </CardSlider> */}
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
