import './App.css';
 component-event
import EventTryoutPage from './pages/EventTryoutPage';

import { Routes, Route } from 'react-router-dom';
 main
import DropdownMenu from './components/DropdownMenu';
import CalendarComponent from './components/CalendarComponent';
import PlanExperience from './pages/PlanExperience';
import Payment from './pages/Payment';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TourGuides from "./pages/TourGuides"
import GuideProfile from './pages/GuideProfile';
 component-event


 main

function App() {
  return (
    <div className="App">
      <Router>
 component-event
        <Routes>
          <Route path="/" element={<PlanExperience />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/pages/Home" element={<Home/>} />
          <Route path="/pages/TourGuides" element={<TourGuides />} />
          <Route path="/guide/:guideName" element={<GuideProfile />} />
          <Route part="/pages/EventTryoutPage" element={<EventTryoutPage />} />
        </Routes>
      </Router>

      <Routes>
      <Route path="/" element={<PlanExperience />} />
      <Route path="/payment" element={<Payment />} />
        <Route path="/pages/Home" element={<Home/>} />
        <Route path="/pages/TourGuides" element={<TourGuides />} />
        <Route path="/guide/:guideName" element={<GuideProfile />} />
      </Routes>
    </Router>
 main
    </div>

  );
}

export default App;
