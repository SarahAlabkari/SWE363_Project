import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../pages/EventDetail.css';
import '../App.css';
import MenuBar from '../components/MenuBar';
import ContactInfo from '../components/ContactInfo';

const links = [
    { path: "../Events", label: "Home" },
    { path: "/profile", label: "Profile" },
    { path: "/reservations", label: "Reservations" },
    { path: "/events-history", label: "Events History" },
    { path: "/sign-out", label: "Sign Out" },
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
        navigate('../Events');
    };

    return (
        <>
            <MenuBar links={links} />

            <header className="header-background">
                <h1>Joyful Journeys</h1>
                <p>
                    Joyful Journeys is your ultimate destination for unforgettable experiences and vibrant adventures. We specialize in curating unique activities that bring joy, excitement, and connection to individuals, families, and groups.
                </p>
            </header>

            <main className="App container">
                <div className="event-detail">
                    <h2>Event {eventId}</h2>
                    <form className="event-form">
                        <label>
                            Description:
                            <input type="text" name="description" value={eventData.description || ''} onChange={handleChange} readOnly={!isEditing} />
                        </label>
                        <label>
                            Region:
                            <input type="text" name="region" value={eventData.region || ''} onChange={handleChange} readOnly={!isEditing} />
                        </label>
                        <label>
                            Capacity:
                            <input type="number" name="capacity" value={eventData.capacity || ''} onChange={handleChange} readOnly={!isEditing} />
                        </label>
                        <label>
                            Venue:
                            <input type="text" name="venue" value={eventData.venue || ''} onChange={handleChange} readOnly={!isEditing} />
                        </label>
                        <label>
                            Time:
                            <input type="text" name="time" value={eventData.time || ''} onChange={handleChange} readOnly={!isEditing} />
                        </label>
                        <label>
                            Price (SAR):
                            <input type="number" name="price" value={eventData.price || ''} onChange={handleChange} readOnly={!isEditing} />
                        </label>
                        <label>
                            Date:
                            <input type="date" name="date" value={eventData.date || ''} onChange={handleChange} readOnly={!isEditing} />
                        </label>
                        <div className="button-container">
                            <button type="button" onClick={handleEditToggle}>
                                {isEditing ? 'Save Changes' : 'Edit'}
                            </button>
                            <button type="button" onClick={handleCancel}>
                                Cancel the Event
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <footer>
                <ContactInfo />
            </footer>
        </>
    );
};

export default EventDetail;
