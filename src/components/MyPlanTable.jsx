import React from 'react';
import '../App.css'; 


const MyPlanTable = ({ activities }) => {
  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Activity</th>
              <th>Location</th>
              <th>Date</th>
              <th>Time</th>
              <th>Seats Booked</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">No activities added yet.</td>
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
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
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
