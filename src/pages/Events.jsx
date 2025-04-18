// Importing necessary components, libraries, pages 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBar from '../components/MenuBar';
import ContactInfo from '../components/ContactInfo';
// Navigation links for the menu bar

const links = [
    { path: "/Events", label: "Home" },
    { path: "/profile", label: "Profile" },
    { path: "/Reservations", label: "Reservations" },
    { path: "/EventsHistory", label: "Events History" },
    { path: "/Home", label: "Logout" }, 
];
// Static data representing event details

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
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoverCreateCard, setHoverCreateCard] = useState(false);

    const handleEventClick = (eventId) => {
        navigate(`/event/${eventId}`);
    };

    const handleCreateEventClick = () => {
        navigate('/create-event');
    };

    const headerStyle = {
        padding: '30px 20px',
        marginBottom: '30px',
        textAlign: 'left'
    };

    const containerStyle = {
        margin: '50px 0',
        padding: '20px',
        textAlign: 'left',
        color: 'black',
        backgroundColor: 'white'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '50px',
        margin: '60px'
    };

    const baseCardStyle = {
        backgroundColor: '#9abf80',
        padding: '25px',
        textAlign: 'center',
        borderRadius: '40px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        color: '#584335',
        transition: 'transform 0.2s, box-shadow 0.2s'
    };

    const getCardStyle = (index) => ({
        ...baseCardStyle,
        ...(hoveredCard === index && {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        })
    });

    const getCreateCardStyle = () => ({
        ...baseCardStyle,
        fontSize: '21px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        ...(hoverCreateCard && {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        })
    });

    return (
        <>
            <MenuBar links={links} />

            <header style={headerStyle}>
                <h1>Joyful Journeys</h1>
                <p>
                    Joyful Journeys is your ultimate destination for unforgettable experiences and vibrant adventures. We specialize in curating unique activities that bring joy, excitement, and connection to individuals, families, and groups. From outdoor escapades to creative workshops, our mission is to inspire and energize people of all ages to explore new horizons and embrace the thrill of the journey!!
                </p>
            </header>

            <main style={containerStyle}>
                <h2>Upcoming Events</h2>
                <div style={gridStyle}>
                    <div
                        style={getCreateCardStyle()}
                        onClick={handleCreateEventClick}
                        onMouseEnter={() => setHoverCreateCard(true)}
                        onMouseLeave={() => setHoverCreateCard(false)}
                    >
                        <h3>Create a New Event</h3>
                    </div>

                    {eventsData.map((event, index) => (
                        <div
                            key={event.id}
                            style={getCardStyle(index)}
                            onClick={() => handleEventClick(event.id)}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
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
