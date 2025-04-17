import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/Events.css';
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

const eventsData = [
    { id: 'Adventure', name: 'Adventure', remainingSeats: 5, time: '10:00 AM' },
    { id: 'ChaseTheFun', name: 'ChaseTheFun', remainingSeats: 3, time: '12:00 PM' },
    { id: 'JoyRide', name: 'JoyRide', remainingSeats: 0, time: '10:00 AM' },
    { id: 'VentureVibe', name: 'VentureVibe', remainingSeats: 2, time: '4:00 PM' },
    { id: 'SparkFest', name: 'SparkFest', remainingSeats: 3, time: '5:00 PM' },
    { id: 'JoyJump', name: 'JoyJump', remainingSeats: 9, time: '2:00 PM' },
    { id: 'OasisQuest', name: 'Oasis Quest', remainingSeats: 7, time: '8:00 PM' },
    { id: 'DesertVibes', name: 'DesertVibes', remainingSeats: 13, time: '12:00 PM' },
];

const Events = () => {
    const navigate = useNavigate();

    const handleEventClick = (eventId) => {
        navigate(`/pages/event/${eventId}`);
    };
   // "/pages/event/:eventId"

    const handleCreateEventClick = () => {
        navigate('/pages/create-event');
    };

 

    return (
        <>
            <MenuBar links={links} />

            <header className="header-background">
                <h1>Joyful Journeys</h1>
                <p>
                    Joyful Journeys is your ultimate destination for unforgettable experiences and vibrant adventures. We specialize in curating unique activities that bring joy, excitement, and connection to individuals, families, and groups. From outdoor escapades to creative workshops, our mission is to inspire and energize people of all ages to explore new horizons and embrace the thrill of the journey.
                </p>
            </header>

            <main className="App container">
                <h2>Upcoming Events</h2>
                <div className="events-grid">
                    <div
                        className="event-card add-event"
                        onClick={handleCreateEventClick}
                    >
                        <h3>Create a New Event</h3>
                    </div>
                    {eventsData.map((event) => (
                        <div
                            key={event.id}
                            className="event-card"
                            onClick={() => handleEventClick(event.id)}
                        >
                            <h3>{event.name}</h3>
                            <p>Remaining seats: {event.remainingSeats}</p>
                            <p>Time: {event.time}</p>
                        </div>
                    ))}
                </div>
            </main>

            <footer>
                <ContactInfo />
            </footer>
        </>
    );
};

export default Events;
