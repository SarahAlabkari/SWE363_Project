import './App.css';
import Profile from './pages/Profile';
import DropdownMenu from './components/DropdownMenu';
import CalendarComponent from './components/CalendarComponent';
//import PlanExperience from './pages/PlanExperience';
import Payment from './pages/Payment';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TourGuides from "./pages/TourGuides"
import GuideProfile from './pages/GuideProfile';
import ActivitiesCarousel from './components/ActivitiesCarousel';
import GuideDashboard from "./pages/GuideDashboard";
import Navbar from './components/Navbar';
import Reservations from './pages/Reservations';
import EventsHistory from './pages/EventsHistory';

import EventDetails from './pages/EventDetails';
function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<PlanExperience />} /> */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/TourGuides" element={<TourGuides />} />
          <Route path="/guide/:guideName" element={<GuideProfile />} />
          <Route path='/GuideDashboard' element={<GuideDashboard />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/eventshistory" element={<EventsHistory />} />
          <Route path="/events-history/:eventId" element={<EventDetails />} />

          {/* <Route path='/ToursCenter' element={<ToursCenter />} /> */}
 
        </Routes>
    </div>
  );
}

export default App;
