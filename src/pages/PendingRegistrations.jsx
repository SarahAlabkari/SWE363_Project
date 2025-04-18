import React from 'react';
import '../styles/Reservation.css';

const PendingRegistrations = () => {
  const registrations = [
    { name: 'Layla Alqahtani', email: 'layla@gmail.com', username: 'layla23', level: 'Tourist' },
    { name: 'Mohammed Alzahrani', email: 'mo.zahrani@gmail.com', username: 'mohz', level: 'Activity Provider' },
    { name: 'Sara Almutairi', email: 'sara.mutairi@gmail.com', username: 'sara_m', level: 'Tour Guide' },
    { name: 'Faisal Alharbi', email: 'faisal.h@gmail.com', username: 'faisal_98', level: 'Tourist' },
    { name: 'Noura Alshehri', email: 'noura.s@gmail.com', username: 'noura_s', level: 'Activity Provider' },
    { name: 'Khalid Alotaibi', email: 'khalid.o@gmail.com', username: 'khalid_90', level: 'Tour Guide' }
  ];

  const handleAccept = (name) => {
    if (window.confirm(`Are you sure you want to accept ${name}?`)) {
      alert(`${name} accepted`);
    }
  };

  const handleReject = (name) => {
    if (window.confirm(`Are you sure you want to reject ${name}?`)) {
      alert(`${name} rejected`);
    }
  };

  return (
    <div className="registrations-page">
      <h1 className="page-title">Pending Registrations</h1>

      <div className="top-controls">
        <select className="filter-dropdown">
          <option>Filter By</option>
          <option>Tourist</option>
          <option>Activity Provider</option>
          <option>Tour Guide</option>
        </select>

        <input type="text" className="search-box" placeholder="Search By Username" />
      </div>

      <div className="registration-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Level</th>
              <th>Action</th>
              <th>Attachments</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg, index) => (
              <tr key={index}>
                <td>{reg.name}</td>
                <td>{reg.email}</td>
                <td>{reg.username}</td>
                <td>{reg.level}</td>
                <td className="actions">
                  <button className="accept-btn" onClick={() => handleAccept(reg.name)}>Accept</button>
                  <button className="reject-btn" onClick={() => handleReject(reg.name)}>Reject</button>
                </td>
                <td><button className="view-btn">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingRegistrations;
