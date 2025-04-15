// Path: src/App.js

import './App.css';
import DropdownMenu from './components/DropdownMenu';
import CalendarComponent from './components/CalendarComponent';
import WhereTo from './pages/WhereTo';
import Payment from './pages/Payment';
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import TourGuides from "./pages/TourGuides";
import GuideProfile from './pages/GuideProfile';
import ActivitiesCarousel from './components/ActivitiesCarousel';


import GuideDashboard from "./pages/GuideDashboard";
import MyPlan from './pages/MyPlan';
import About from './pages/About';
import MyWishList from "./pages/MyWishList";

function App() {
  return (
    <div className="App">
      
        
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/WhereTo" element={<WhereTo />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/pages/Home" element={<Home />} />
        <Route path="/pages/TourGuides" element={<TourGuides />} />
        <Route path="/guide/:guideName" element={<GuideProfile />} />
        <Route path="/GuideDashboard" element={<GuideDashboard />} />
        <Route path="/pages/About" element={<About />} />
        <Route path="/pages/MyWishList" element={<MyWishList />} />
        <Route path="/pages/MyPlan" element={<MyPlan />} />
      </Routes>
    </div>
  );
}

export default App;