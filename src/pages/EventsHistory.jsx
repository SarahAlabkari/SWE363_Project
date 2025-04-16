import React from 'react';
import '../styles/EventsHistory.css';
import { useNavigate } from 'react-router-dom';

const events = [
  { id: 1, name: 'Event 1', rating: 4.5 },
  { id: 2, name: 'Event 2', rating: 5 },
  { id: 3, name: 'Event 3', rating: 4 },
  { id: 4, name: 'Event 4', rating: 4.7 }
];

const EventsHistory = () => {
  const navigate = useNavigate();

  const handleClick = (eventId) => {
    navigate(`/events-history/${eventId}`);
  };

  return (
    <div className="events-history-page">
      <h1 className="page-title">Events History Reviews</h1>
      <div className="event-grid">
        {events.map(event => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => handleClick(event.id)}
          >
            <div className="event-image">Image</div>
            <h3>{event.name}</h3>
            <p>⭐ {event.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsHistory;
