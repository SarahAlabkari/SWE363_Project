import React from 'react';
import MyPlanTable from '../components/MyPlanTable';
import MenuBar from '../components/MenuBar';


const sampleAcMytivities = [
  {
    name: 'City Tour',
    location: 'Riyadh',
    date: '2025-04-10',
    time: '10:00 AM',
    seats: 2,
    status: 'Confirmed'
  },
  {
    name: 'Museum Visit',
    location: 'Jeddah',
    date: '2025-04-12',
    time: '2:00 PM',
    seats: 4,
    status: 'Pending'
  }
];

const MyPlan = () => {

    const navLinks = [
      { label: "Home", path: "/Home" },
      { label: "About", path: "/About" },
      { label: "Where To?", path: "" },
      { label: "Find a Local", path: "/TourGuides" },
      { label: "My Plan", path: "/MyPlan" },
      { label: "Wishlist", path: "/MyWishlist" },
      { label: "Login", path: "/" },
      ];

  return (
    <div>
    <div>
    <MenuBar links={navLinks} />
    </div>
    <div className="container mt-5 text-center">
    <h2> My Plan!</h2>
    <MyPlanTable activities={sampleAcMytivities} />
    </div>
    </div>
  );
};

export default MyPlan;
