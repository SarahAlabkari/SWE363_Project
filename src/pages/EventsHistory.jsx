import React from 'react';
import '../styles/EventsHistory.css';

const events = [
  { id: 1, name: 'Event 1', rating: 4, image: '/camles-riding.jpg' },
  { id: 2, name: 'Event 2', rating: 5, image: '/hiking in desert.jpg' },
  { id: 3, name: 'Event 3', rating: 4.5, image: '/images/event3.jpg' },
  { id: 4, name: 'Event 4', rating: 5, image: '/images/event4.jpg' },
];

const EventsHistory = () => {
  return (
    <div className="events-history-page">
      <h1 className="page-title">Events history reviews</h1>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-image">
              <img
                src={event.image}
                alt={event.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
            <h3>{event.name}</h3>
            <p className="rating">★★★★★ {event.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsHistory;
