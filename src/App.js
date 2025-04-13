// Path: src/App.js

import './App.css';
import DropdownMenu from './components/DropdownMenu';
import CalendarComponent from './components/CalendarComponent';
import Payment from './pages/Payment';
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";  // ✅ Remove BrowserRouter here
import Home from "./pages/Home";
import TourGuides from "./pages/TourGuides";
import GuideProfile from './pages/GuideProfile';
import ActivitiesCarousel from './components/ActivitiesCarousel';
import GuideDashboard from "./pages/GuideDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/TourGuides" element={<TourGuides />} />
        <Route path="/guide/:guideName" element={<GuideProfile />} />
        <Route path="/GuideDashboard" element={<GuideDashboard />} />
      </Routes>
    </div>
  );
}

export default App;

