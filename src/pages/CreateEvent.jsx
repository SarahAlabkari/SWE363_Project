import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/CreateEvent.css';
import '../App.css'; 
import MenuBar from '../components/MenuBar';
import ContactInfo from '../components/ContactInfo';
const links = [
    
    { path: "../pages/Events", label: "Home" },
    { path: "/profile", label: "Profile" },
    { path: "/reservations", label: "Reservations" },
    { path: "/events-history", label: "Events History" },
    { path: "/sign-out", label: "Sign Out" },
];

const CreateEvent = () => {
    const navigate = useNavigate();
    const [eventData, setEventData] = useState({
        description: '',
        region: '',
        capacity: '',
        venue: '',
        time: '',
        price: '',
        date: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!eventData.description || !eventData.region || !eventData.venue || !eventData.capacity || !eventData.time || !eventData.price || !eventData.date) {
            setError('Error: All fields are required!');
            return;
        }

        console.log('Event created:', eventData);
        navigate('/');
    };

    return (
        <>
            <MenuBar links={links} />

            <header className="header-background">
                <h1>Joyful Journeys</h1>
                <p>
                    Joyful Journeys is your ultimate destination for unforgettable experiences and vibrant adventures. We specialize in curating unique activities that bring joy, excitement, and connection to individuals, families, and groups!!
                </p>
            </header>

            <main className="App container">
                <div className="create-event">
                    <h2>Create an Event</h2>
                    {error && <div className="error-message">{error}</div>}
                    <form className="event-form" onSubmit={handleSubmit}>
                        <label>
                            Description:
                            <input type="text" name="description" value={eventData.description} onChange={handleChange} />
                        </label>
                        <label>
                            Region:
                            <input type="text" name="region" value={eventData.region} onChange={handleChange} />
                        </label>
                        <label>
                            Capacity:
                            <input type="number" name="capacity" value={eventData.capacity} onChange={handleChange} />
                        </label>
                        <label>
                            Venue:
                            <input type="text" name="venue" value={eventData.venue} onChange={handleChange} />
                        </label>
                        <label>
                            Time:
                            <input type="text" name="time" placeholder="e.g., 10:00 AM" value={eventData.time} onChange={handleChange} />
                        </label>
                        <label>
                            Price (SAR):
                            <input type="number" name="price" value={eventData.price} onChange={handleChange} />
                        </label>
                        <label>
                            Date:
                            <input type="date" name="date" value={eventData.date} onChange={handleChange} />
                        </label>
                        <button type="submit">Create</button>
                    </form>
                </div>
            </main>

            <footer>
                <ContactInfo />
            </footer>
        </>
    );
};

export default CreateEvent;
