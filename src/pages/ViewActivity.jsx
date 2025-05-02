import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../api/axiosInstance';
import MenuBar from '../components/MenuBar';

const ViewActivity = () => {
  const navLinks = [
    { label: "Home", path: "/Home" },
    { label: "About", path: "/About" },
    { label: "Where To?", path: "/WhereTo" },
    { label: "Find a Local", path: "/TourGuides" },
    { label: "My Plan", path: "/MyPlan" },
    { label: "Wishlist", path: "/MyWishlist" },
    { label: "Login", path: "/Login" },
  ];

  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);
  const [seats, setSeats] = useState(1);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await axios.get(`/activities/${id}`);
        setActivity(res.data);
      } catch (err) {
        console.error("Error fetching activity:", err.response?.data || err.message);
        alert("Activity not found or server error.");
      }
      
    };

    fetchActivity();
  }, [id]);

  const handleAddToPlan = async () => {
    try {
      const touristId = localStorage.getItem('touristId');
      if (!touristId) {
        const goToLogin = window.confirm('You must be logged in as a tourist to add to your plan. Do you want to log in now?');
        if (goToLogin) navigate('/Login');
        return;
      }

      await axios.post(`/tourists/${touristId}/add-plan`, {
        activityId: activity._id,
        date: activity.date,
        time: activity.time,
        seats
      });

      alert("✅ Activity added to your plan!");
    } catch (err) {
      console.error("Add to plan failed:", err);
      alert("❌ Something went wrong while adding to your plan.");
    }
  };

  if (!activity) {
    return (
      <div className="text-center mt-5 text-danger">
        ⚠️ Could not load activity. Please try again or check the link.
      </div>
    );
  }
  
  console.log("✅ ViewActivity loaded", id);
  return (
    <div className="min-vh-100 bg-light">
      <MenuBar links={navLinks} />

      <div className="container d-flex justify-content-center py-5">
        <div className="card shadow-lg" style={{ maxWidth: '700px', width: '100%' }}>
          <div className="card-body text-center px-4 py-5">
            <h2 className="mb-4">🎯 Activity Details</h2>

            <img
              src={activity.image}
              alt="Activity"
              className="img-fluid rounded mb-4 shadow-sm"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />

            <div className="mb-4">
              <h5 className="fw-bold">📌 Name</h5>
              <p>{activity.eventName}</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">👤 Provider</h5>
              <p>{activity.provider?.username || "Unknown"}</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">📅 Date & Time</h5>
              <p>{activity.date} at {activity.time}</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">📍 Location</h5>
              <p>{activity.location}, {activity.cityName}</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">🎟️ Seats Remaining</h5>
              <p>{activity.remainingSeats} / {activity.capacity}</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">📝 Description</h5>
              <p>{activity.description}</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">🎟️ Number of Seats</h5>
              <div className="d-flex justify-content-center align-items-center gap-2">
                <button className="btn btn-outline-secondary" onClick={() => setSeats(Math.max(1, seats - 1))}>-</button>
                <span>{seats}</span>
                <button className="btn btn-outline-secondary" onClick={() => setSeats(seats + 1)}>+</button>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3">
              <button
                onClick={() => window.history.back()}
                className="btn"
                style={{ backgroundColor: '#9abf80', color: 'white', border: 'none' }}
              >
                ← Continue Exploring
              </button>

              <button
                className="btn"
                style={{ backgroundColor: '#9abf80', color: 'white', border: 'none' }}
                onClick={handleAddToPlan}
              >
                ➕ Add to Plan
              </button>

              <button
                className="btn"
                style={{ backgroundColor: '#9abf80', color: 'white', border: 'none' }}
              >
                ❤️ Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewActivity;
