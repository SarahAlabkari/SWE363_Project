import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarComponent.css'; // optional for custom styles

function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
     

      <div style={{ transform: 'scale(0.85)', transformOrigin: 'top center' }}>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="mt-3">Selected date: {date.toDateString()}</p>
    </div>
  );
}

export default CalendarComponent;
