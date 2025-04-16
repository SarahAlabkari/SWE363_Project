// Path: src/components/CalendarView.jsx

import React, { useState } from 'react';
import './CalendarView.css';

const CalendarView = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDelete = () => {
    // TODO: Implement delete logic
    alert(`Deleting tours from ${startDate} to ${endDate}`);
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Calendar view</h2>
      <select
        className="calendar-month-dropdown"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        <option value="">Choose a month</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>

      <div className="calendar-box">
        {/* Calendar content goes here */}
      </div>

      <div className="calendar-filters">
        <label>
          From
          <input
            type="date"
            className="calendar-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          To
          <input
            type="date"
            className="calendar-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <button className="calendar-delete-btn" onClick={handleDelete}>
          Delete tour/s
        </button>
      </div>
    </div>
  );
};

export default CalendarView;