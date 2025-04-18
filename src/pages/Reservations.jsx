import React, { useState } from 'react';
import '../styles/Reservation.css';

const initialData = [
  { id: 1, event: 'Event 1', participant: 'Tourist #1', status: 'Paid' },
  { id: 2, event: 'Event 1', participant: 'Tourist #14', status: 'Unpaid' },
  { id: 3, event: 'Event 1', participant: 'Tourist #8', status: 'Unpaid' },
  { id: 4, event: 'Event 2', participant: 'Tourist #5', status: 'Paid' },
  { id: 5, event: 'Event 3', participant: 'Tourist #22', status: 'Paid' },
];

const Reservations = () => {
  const [reservations, setReservations] = useState(initialData);
  const [confirmed, setConfirmed] = useState([]);
  const [reminded, setReminded] = useState([]);

  const handleConfirm = (id) => {
    if (!confirmed.includes(id)) {
      setConfirmed([...confirmed, id]);
      alert(`Reservation #${id} has been confirmed`);
    }
  };

  const handleReminder = (id) => {
    if (!reminded.includes(id)) {
      setReminded([...reminded, id]);
      alert(`Reminder sent for reservation #${id}`);
    }
  };

  return (
    <div className="reservations-page">
      <h1 className="page-title">Events Reservation Status</h1>
      <div className="reservation-table">
        <table>
          <thead>
            <tr>
              <th>Res #</th>
              <th>Event</th>
              <th>Participant username</th>
              <th>Payment status</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res) => (
              <tr key={res.id}>
                <td>#{res.id}</td>
                <td>{res.event}</td>
                <td>{res.participant}</td>
                <td className="actions">
                  <span className="status-text">{res.status}</span>
                  <button
                    className={`icon-btn ${reminded.includes(res.id) ? 'pressed' : ''}`}
                    onClick={() => handleReminder(res.id)}
                  >
                    🔔
                  </button>
                  <button
                    className={`icon-btn ${confirmed.includes(res.id) ? 'pressed' : ''}`}
                    onClick={() => handleConfirm(res.id)}
                  >
                    ✅
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservations;
