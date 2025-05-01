import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
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

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCity = params.get("city");

  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [city, setCity] = useState(selectedCity || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!city) return;

    const fetchCityData = async () => {
      try {
        // const res = await axios.get(`http://localhost:5000/api/cities/${city}`);
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/cities/${city}`);

        setDestination(res.data.name);
        setDescription(res.data.bio);
      } catch (err) {
        console.error("Error fetching city:", err);
        setDestination(city); // fallback
        setDescription("Discover unique experiences and activities in this city.");
      }
    };

    fetchCityData();
  }, [city]);

  return (
    <div className="explore-activities-page">
      <MenuBar links={navLinks} />

      <h2 className="text-center fw-bold mt-4" style={{ color: '#584335' }}>
        Explore Activities!
      </h2>

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
          <DropdownMenu onSelectCity={(selected) => setCity(selected)} />
        </div>

        <div style={{ width: "fit-content" }}>
          <label
            className="d-block mb-1"
            style={{
              fontSize: '14px',
              color: '#5c4033',
              textAlign: 'left'
            }}
          >
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
