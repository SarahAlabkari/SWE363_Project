import React from 'react';
import '../styles/EventsHistory.css';

const events = [
  { id: 1, name: 'Event 1', rating: 4 },
  { id: 2, name: 'Event 2', rating: 5 },
  { id: 3, name: 'Event 3', rating: 4.5 },
  { id: 4, name: 'Event 4', rating: 5 },
];

const EventsHistory = () => {
  return (
    <div className="events-history-page">
      <h1 className="page-title">Events history reviews</h1>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-image">[ Image Placeholder ]</div>
            <h3>{event.name}</h3>
            <p className="rating">★★★★★ {event.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsHistory;
