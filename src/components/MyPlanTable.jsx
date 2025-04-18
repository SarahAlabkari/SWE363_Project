import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const MyPlanTable = ({ activities }) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate('/EventDetail'); // Navigate to the event details page
  };

  const handleCancel = () => {
  };

  const handlePay = () => {
    navigate('/Payment');
  };

  return (
    <div className="container mt-4 position-static">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Activity</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
            <th>Seats Booked</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {activities.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">No activities added yet.</td>
            </tr>
          ) : (
            activities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.name}</td>
                <td>{activity.location}</td>
                <td>{activity.date}</td>
                <td>{activity.time}</td>
                <td>{activity.seats}</td>
                <td>
                  <span className={`custom-badge ${getStatusClass(activity.status)}`}>
                    {activity.status}
                  </span>
                </td>
                <td style={{ position: 'relative' }}>
                  <div className="dropdown dropup">
                    <button
                      className="btn btn-sm btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Actions
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" style={{ zIndex: 1050 }}>
                      <li>
                        <button className="dropdown-item" onClick={handleView}>
                          <i className="bi bi-eye me-2"></i>View
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={handleCancel}>
                          <i className="bi bi-x-circle me-2"></i>Cancel
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={handlePay}>
                          <i className="bi bi-currency-dollar me-2"></i>Pay
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

const getStatusClass = (status) => {
  if (!status) return 'status-default';
  switch (status.trim().toLowerCase()) {
    case 'confirmed':
      return 'status-confirmed';
    case 'pending':
      return 'status-pending';
    case 'cancelled':
      return 'status-cancelled';
    default:
      return 'status-default';
  }
};

export default MyPlanTable;
