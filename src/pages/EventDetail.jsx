
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MenuBar from '../components/MenuBar';
import ContactInfo from '../components/ContactInfo';
import Popup from '../components/Popup';

const links = [
  { path: "/Events", label: "Home" },
  { path: "/profile", label: "Profile" },
  { path: "/Reservations", label: "Reservations" },
  { path: "/EventsHistory", label: "Events History" },
  { path: "/Home", label: "Logout" },
];

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const [eventData, setEventData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showSavePopup, setShowSavePopup] = useState(false);

  // Fetch event data from backend
  useEffect(() => {
    fetch(`http://localhost:5050/api/activities/${eventId}`)
      .then(res => res.json())
      .then(data => setEventData(data))
      .catch(err => {
        console.error("Failed to load event:", err);
        setEventData(null); // Prevent crash
      });
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!eventData) return;

    setEventData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    if (!eventData) return;

    if (isEditing) {
      const errors = {};
      ["description", "region", "venue", "date", "time", "capacity", "price"].forEach(field => {
        const value = eventData[field];
        if (!value || value.toString().trim() === "") {
          errors[field] = "Field cannot be empty";
        } else if ((field === "capacity" || field === "price") && value < 1) {
          errors[field] = "Must be a positive number";
        }
      });

      if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        return;
      }

      setShowSavePopup(true);
    } else {
      setIsEditing(true);
    }
  };

  const handleSaveConfirm = () => {
    fetch(`http://localhost:5050/api/activities/${eventId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData)
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to update");
        return res.json();
      })
      .then(() => {
        setIsEditing(false);
        setShowSavePopup(false);
        setValidationErrors({});
      })
      .catch(err => {
        alert("Update failed.");
        console.error(err);
      });
  };

  const handleCancelClick = () => setShowCancelPopup(true);
  const handleConfirmCancel = () => navigate('/Events');

  if (!eventData) {
    return (
      <>
        <MenuBar links={links} />
        <main style={{ padding: '30px', textAlign: 'center' }}>
          <h2>Loading event data...</h2>
        </main>
        <footer><ContactInfo /></footer>
      </>
    );
  }

  return (
    <>
      <MenuBar links={links} />

      <header style={{ padding: '30px 20px' }}>
        <h1>Joyful Journeys</h1>
        <p>Unforgettable experiences await!</p>
      </header>

      {showCancelPopup && (
        <Popup
          title="Cancel Event"
          message="Are you sure you want to cancel this event?"
          type="warning"
          showConfirm
          onConfirm={handleConfirmCancel}
        />
      )}

      {showSavePopup && (
        <Popup
          title="Confirm Save"
          message="Are you sure you want to save the changes?"
          type="success"
          showConfirm
          onConfirm={handleSaveConfirm}
        />
      )}

      <main style={{ padding: '20px', backgroundColor: 'white' }}>
        <div style={{ backgroundColor: '#9abf80', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
          <h2>Event: {eventId}</h2>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            {['description', 'region', 'capacity', 'venue', 'time', 'price', 'date'].map(field => (
              <label key={field} style={{ marginBottom: '12px' }}>
                {field.charAt(0).toUpperCase() + field.slice(1)}:
                <input
                  type={field === "date" ? "date" : field === "capacity" || field === "price" ? "number" : "text"}
                  name={field}
                  value={eventData[field] || ''}
                  onChange={handleChange}
                  readOnly={!isEditing}
                  style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
                />
                {validationErrors[field] && (
                  <span style={{ color: 'red', fontSize: '12px' }}>{validationErrors[field]}</span>
                )}
              </label>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" onClick={handleEditToggle}>{isEditing ? "Save" : "Edit"}</button>
              <button type="button" onClick={handleCancelClick}>Cancel</button>
            </div>
          </form>
        </div>
      </main>

      <footer><ContactInfo /></footer>
    </>
  );
};

export default EventDetail;


