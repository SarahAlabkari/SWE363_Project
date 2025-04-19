import React from 'react';
import MyPlanTable from '../components/MyPlanTable';
import MenuBar from '../components/MenuBar';
import TouristMenuBar from '../components/TouristMenuBar'; // Adjust the path based on your project structure


const sampleAcMytivities = [
  {
    name: 'Alula',
    location: 'Alula',
    date: '2025-04-10',
    time: '10:00 AM',
    seats: 2,
    status: 'Confirmed'
  },
  {
    name: 'Alula Visit',
    location: 'Alula',
    date: '2025-04-12',
    time: '2:00 PM',
    seats: 4,
    status: 'Pending'
  }
];

const MyPlan = () => {

  return (
    <div>
    <div>
    <TouristMenuBar />
    </div>
    <div className="container mt-5 text-center">
    <h2> My Plan!</h2>
    <MyPlanTable activities={sampleAcMytivities} />
    </div>
    </div>
  );
};

export default MyPlan;
