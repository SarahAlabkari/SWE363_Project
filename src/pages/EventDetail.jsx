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

const eventsData = {
  Adventure: {
    description: 'A Fun Adventure Event',
    region: 'Khobar',
    capacity: 50,
    time: '10:00 AM',
    date: '2023-05-01',
    venue: 'Adventure Park',
    price: 20,
  },
  ChaseTheFun: {
    description: 'Chase the Fun',
    region: 'Riyadh',
    capacity: 30,
    time: '12:00 PM',
    date: '2023-06-01',
    venue: 'Funland',
    price: 25,
  },
  JoyRide: {
    description: 'Joy Ride',
    region: 'Dammam',
    capacity: 20,
    time: '2:00 PM',
    date: '2023-07-01',
    venue: 'Joy Park',
    price: 15,
  },
  VentureVibe: {
    description: 'Thrilling outdoor experience',
    region: 'Jeddah',
    capacity: 35,
    time: '4:00 PM',
    date: '2023-08-01',
    venue: 'Mountain Base',
    price: 30,
  },
  SparkFest: {
    description: 'Festival of lights and music',
    region: 'Abha',
    capacity: 60,
    time: '5:00 PM',
    date: '2023-09-10',
    venue: 'Spark Grounds',
    price: 40,
  },
  JoyJump: {
    description: 'Bungee jumping fun day',
    region: 'Tabuk',
    capacity: 15,
    time: '2:00 PM',
    date: '2023-10-15',
    venue: 'Jump Arena',
    price: 35,
  },
  OasisQuest: {
    description: 'Desert exploration adventure',
    region: 'Hail',
    capacity: 25,
    time: '8:00 PM',
    date: '2023-11-20',
    venue: 'Oasis Base',
    price: 50,
  },
  DesertVibes: {
    description: 'Music and camping in the desert',
    region: 'AlUla',
    capacity: 40,
    time: '12:00 PM',
    date: '2023-12-05',
    venue: 'Desert Camp',
    price: 45,
  },
};

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const [eventData, setEventData] = useState(eventsData[eventId] || {});
  const [isEditing, setIsEditing] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showSavePopup, setShowSavePopup] = useState(false);

  useEffect(() => {
    const eventDetails = eventsData[eventId];
    if (eventDetails) {
      setEventData(eventDetails);
    }
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if ((name === "capacity" || name === "price") && value < 1) {
      setValidationErrors(prev => ({ ...prev, [name]: "Must be a positive number" }));
    } else if (value.trim() === "") {
      setValidationErrors(prev => ({ ...prev, [name]: "Field cannot be empty" }));
    } else {
      setValidationErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }

    setEventData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
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
    setIsEditing(false);
    setShowSavePopup(false);
    setValidationErrors({});
  };

  const handleCancelClick = () => {
    setShowCancelPopup(true);
  };

  const handleConfirmCancel = () => {
    setShowCancelPopup(false);
    navigate('/Events');
  };

  return (
    <>
      <MenuBar links={links} />

      {showCancelPopup && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        }}>
          <Popup
            title="Cancel Event"
            message="Are you sure you want to cancel this event?"
            type="warning"
            showConfirm
            onConfirm={handleConfirmCancel}
          />
        </div>
      )}

      {showSavePopup && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1000,
        }}>
          <Popup
            title="Confirm Save"
            message="Are you sure you want to save the changes?"
            type="success"
            showConfirm
            onConfirm={handleSaveConfirm}
          />
        </div>
      )}

      <header style={{ padding: '30px 20px', marginBottom: '30px', textAlign: 'left' }}>
        <h1>Joyful Journeys</h1>
        <p>
        Joyful Journeys is your ultimate destination for unforgettable experiences and vibrant adventures. We specialize in curating unique activities that bring joy, excitement, and connection to individuals, families, and groups. From outdoor escapades to creative workshops, our mission is to inspire and energize people of all ages to explore new horizons and embrace the thrill of the journey!!
        </p>
      </header>

      <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
        <main style={{ padding: '20px' }}>
          <div
            style={{
              backgroundColor: '#9abf80',
              padding: '20px',
              borderRadius: '8px',
              maxWidth: '600px',
              margin: '20px auto',
              color: '#584335',
            }}
          >
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
              Event {eventId}
            </h2>

            <form style={{ display: 'flex', flexDirection: 'column', padding: '6px' }}>
              {[
                'description',
                'region',
                'capacity',
                'venue',
                'time',
                'price',
                'date',
              ].map((field) => (
                <label key={field} style={{ marginBottom: '15px' }}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
                  <input
                    type={field === 'capacity' || field === 'price' ? 'number' : field === 'date' ? 'date' : 'text'}
                    name={field}
                    value={eventData[field] || ''}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    style={{
                      padding: '10px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      width: '96%',
                      backgroundColor: isEditing ? '#ffffff' : '#f9f9f9',
                      marginTop: '5px',
                    }}
                  />
                  {validationErrors[field] && (
                    <span style={{ color: 'red', fontSize: '12px' }}>
                      {validationErrors[field]}
                    </span>
                  )}
                </label>
              ))}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <button
                  type="button"
                  onClick={handleEditToggle}
                  style={{
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '40px',
                    cursor: 'pointer',
                    backgroundColor: '#584335',
                    color: 'white',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#e5e3d4';
                    e.target.style.color = '#584335';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#584335';
                    e.target.style.color = 'white';
                  }}
                >
                  {isEditing ? 'Save Changes' : 'Edit'}
                </button>

                <button
                  type="button"
                  onClick={handleCancelClick}
                  style={{
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '40px',
                    cursor: 'pointer',
                    backgroundColor: '#584335',
                    color: 'white',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#e5e3d4';
                    e.target.style.color = '#584335';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#584335';
                    e.target.style.color = 'white';
                  }}
                >
                  Cancel the Event
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>

      <footer>
        <ContactInfo />
      </footer>
    </>
  );
};

export default EventDetail;

