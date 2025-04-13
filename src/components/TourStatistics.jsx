// Path: src/components/TourStatistics.jsx

import React, { useState } from "react";
import "./TourStatistics.css"; // Ensure this file exists

const TourStatistics = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  return (
    <div className="tour-statistics">
      <h2 className="section-title">How many?</h2>

      <div className="date-range">
  <div className="date-field">
    <label htmlFor="fromDate">From</label>
    <input
      id="fromDate"
      type="date"
      value={fromDate}
      onChange={(e) => setFromDate(e.target.value)}
    />
  </div>
  <div className="date-field">
    <label htmlFor="toDate">To</label>
    <input
      id="toDate"
      type="date"
      value={toDate}
      onChange={(e) => setToDate(e.target.value)}
    />
  </div>
</div>

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
