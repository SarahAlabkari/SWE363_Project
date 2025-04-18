import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MenuBar from '../components/MenuBar';
import ContactInfo from '../components/ContactInfo';

const links = [
  { path: "/Events", label: "Home" },
  { path: "/profile", label: "Profile" },
  { path: "/reservations", label: "Reservations" },
  { path: "/events-history", label: "Events History" },
  { path: "/Home", label: "Sign Out" },
];

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const eventsData = {
    1: {
      description: 'A Fun Adventure Event',
      region: 'Khobar',
      capacity: 50,
      time: '10:00 AM',
      date: '2023-05-01',
      venue: 'Adventure Park',
      price: 20,
    },
    2: {
      description: 'Chase the Fun',
      region: 'Riyadh',
      capacity: 30,
      time: '12:00 PM',
      date: '2023-06-01',
      venue: 'Funland',
      price: 25,
    },
    3: {
      description: 'Joy Ride',
      region: 'Dammam',
      capacity: 20,
      time: '2:00 PM',
      date: '2023-07-01',
      venue: 'Joy Park',
      price: 15,
    },
  };

  const [eventData, setEventData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const eventDetails = eventsData[eventId];
    if (eventDetails) {
      setEventData(eventDetails);
    }
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleCancel = () => {
    alert('Event cancelled!');
    navigate('/Events');
  };

  return (
    <>
      <MenuBar links={links} />

      <header
        style={{
         // backgroundColor: 'white',
          padding: '30px 20px',
          marginBottom: '30px',
          //borderBottom: '2px solid #ccc',
          textAlign: 'left',
        }}
      >
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

            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '6px',
              }}
            >
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
                      backgroundColor: '#ffffff',
                      marginTop: '5px',
                    }}
                  />
                </label>
              ))}

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '20px',
                }}
              >
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
                  onClick={handleCancel}
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
