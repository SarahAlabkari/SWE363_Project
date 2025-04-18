// Path: src/components/TourStatistics.jsx

import React, { useState } from "react";
import "./TourStatistics.css"; 

const TourStatistics = () => {
  const [fromDate, setFromDate] = useState("");  // Store the selected "From" date
  const [toDate, setToDate] = useState("");      // Store the selected "To" date


  return (
    <div className="tour-statistics">
      {/* Date range selection */}
      <div className="date-range">
        <div className="date-field">
          <label htmlFor="fromDate">From</label>
          <input
            id="fromDate"
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)} // Simple setter
            max={toDate || undefined} // Limit fromDate to not be after toDate
          />
        </div>
        <div className="date-field">
          <label htmlFor="toDate">To</label>
          <input
            id="toDate"
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}   // Simple setter
            min={fromDate || undefined} // Limit toDate to not be before fromDate
          />
        </div>
      </div>

      {/* Statistics display */}
      <div className="stats-box">
        <div className="stat-row">
          <span>Total tours completed</span>
          <span className="stat-number">12</span>
        </div>
        <div className="stat-row">
          <span>Tours canceled</span>
          <span className="stat-number">3</span>
        </div>
        <div className="stat-row">
          <span>Tours scheduled</span>
          <span className="stat-number">5</span>
        </div>
        <div className="stat-row">
          <span>Total attendees</span>
          <span className="stat-number">48</span>
        </div>
      </div>
    </div>
  );
};

export default TourStatistics;
