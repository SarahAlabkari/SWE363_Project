import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MenuBar from '../components/MenuBar';

const TourDetails = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/About" },
    { label: "Profile", path: "/GuideProfile" },
    { label: "Dashboard", path: "/GuideDashboard" },
    { label: "Tour Center", path: "/TourCenter" },
  ];

  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const mockTour = {
      name: 'Alula Tour',
      TourID: 1,
      tourGuid: 'Sarah Alabkari',
      date: 'April 10, 2025',
      time: '9:00 AM - 4:00 PM',
      startLocation: 'Alula, Saudi Arabia',
      description: 'Join us for a day full of adventure!',
      activitiesNames: [
        'Hiking in AlUla’s rock formations',
        'Hot Air Balloon Ride',
        'Sandboarding'
      ],
      activitiesIDs: [1, 2, 3],
      state: 'Active',
    };
    setTour(mockTour);
  }, []);

  if (!tour) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="min-vh-100 bg-light">
      <MenuBar links={navLinks} />

      <div className="container d-flex justify-content-center py-5">
        <div className="card shadow-lg" style={{ maxWidth: '700px', width: '100%' }}>
          <div className="card-body text-center px-4 py-5">

            <h2 className="mb-4">
              <span role="img" aria-label="map">🗺️</span> Tour Details
            </h2>

            <div className="mb-4">
              <h5 className="fw-bold"><span role="img" aria-label="pin">📌</span> Name</h5>
              <p>{tour.name}</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold"><span role="img" aria-label="guide">🧭</span> Tour Guide</h5>
              <p>{tour.tourGuid}</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold"><span role="img" aria-label="calendar">📅</span> Date & Time</h5>
              <p>{tour.date} | {tour.time}</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold"><span role="img" aria-label="location">📍</span> Start Location</h5>
              <p>{tour.startLocation}</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold"><span role="img" aria-label="status">📘</span> Status</h5>
              <span className="badge bg-success">{tour.state}</span>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold"><span role="img" aria-label="description">📝</span> Description</h5>
              <p>{tour.description}</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold"><span role="img" aria-label="activities">🎯</span> Included Activities</h5>
              <ul className="list-group list-group-flush">
                {tour.activitiesNames.map((activity, index) => (
                  <li className="list-group-item" key={index}>
                    #{tour.activitiesIDs[index]} – {activity}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => window.history.back()}
              className="btn btn-primary mt-4"
            >
              ← Back to Tours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
