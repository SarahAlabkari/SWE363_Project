// Path: src/components/CalendarView.jsx

import React, { useState } from 'react';
import './CalendarView.css';
import Calendar from 'react-calendar';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [calendarDate, setCalendarDate] = useState(new Date());

  const handleDelete = () => {
    alert(`Deleting tours from ${startDate} to ${endDate}`);
  };

  return (
    <div className="calendar-container">
      {/* Calendar title */}
      {/* <h2 className="calendar-title">Calendar view</h2> */}

      {/* Dropdown for month selection */}
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

      {/* Horizontal layout container */}
      <div className="calendar-content-row">

        {/* Real interactive calendar */}
        <div className="calendar-box">
          <Calendar
            onChange={setCalendarDate}
            value={calendarDate}
            className="custom-calendar"
            calendarType="gregory"
            view="month"
            minDetail="month"
            showNavigation={true}
            showNeighboringMonth={false}
          />
        </div>

        {/* From/To range & Delete button */}
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
    </div>
  );
};

export default CalendarView;
