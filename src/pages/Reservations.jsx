// Path: src/pages/Reservations.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Reservation.css'; 

const initialData = [
  { id: 1, event: 'Event 1', participant: 'Tourist #1', status: 'Paid' },
  { id: 2, event: 'Event 1', participant: 'Tourist #14', status: 'Unpaid' },
  { id: 3, event: 'Event 1', participant: 'Tourist #8', status: 'Unpaid' },
  { id: 4, event: 'Event 2', participant: 'Tourist #5', status: 'Paid' },
  { id: 5, event: 'Event 3', participant: 'Tourist #22', status: 'Paid' },
];

const Reservations = () => {
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
    <>
      <Navbar />
      <div className="page-container">
        <h1 className="page-title">Events Reservation Status</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center">
            <thead>
              <tr>
                <th>Res #</th>
                <th>Event</th>
                <th>Participant</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {initialData.map((res) => (
                <tr key={res.id}>
                  <td>#{res.id}</td>
                  <td>{res.event}</td>
                  <td>{res.participant}</td>
                  <td>
                    <span className={`custom-badge ${res.status.toLowerCase() === 'paid' ? 'status-confirmed' : 'status-cancelled'}`}>
                      {res.status.toLowerCase()}
                    </span>
                  </td>
                  <td>
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
    </>
  );
};

export default Reservations;
