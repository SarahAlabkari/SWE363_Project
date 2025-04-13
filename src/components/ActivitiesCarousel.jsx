import React from "react";
import Activity from "./Activity";
import '../App.css';

function ActivitiesCarousel() {
  return (
    <div className="container rounded" id="activitiesCarousel" style={{ width:'50rem', backgroundColor: 'var(--brown-color)', paddingLeft: '15px', paddingRight: '15px', }}>
      <div className="row">
        <div className="col-sm">
          <Activity />
        </div>
        <div className="col-sm">
          <Activity />
        </div>
        <div className="col-sm">
          <Activity />
        </div>
      </div>
    </div>
  );
}

export default ActivitiesCarousel;