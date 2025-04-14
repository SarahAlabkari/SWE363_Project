import './App.css';
import DropdownMenu from './components/DropdownMenu';
import CalendarComponent from './components/CalendarComponent';
import PlanExperience from './pages/PlanExperience';
import Payment from './pages/Payment';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TourGuides from "./pages/TourGuides"
import GuideProfile from './pages/GuideProfile';
import ActivitiesCarousel from './components/ActivitiesCarousel';



function App() {
  return (
    <div className="App">
        <Routes>
          {/* <Route path="/pages/PlanExperience" element={<PlanExperience />} /> */}
          <Route path="/pages/PlanExperience" element={<PlanExperience />} /> 
          <Route path="/payment" element={<Payment />} />
          <Route path="/pages/Home" element={<Home/>} />
          <Route path="/pages/TourGuides" element={<TourGuides />} />
          <Route path="/guide/:guideName" element={<GuideProfile />} />

          <Route path='/ActivitiesCarousel' element={ <ActivitiesCarousel /> } />

       
        </Routes>
    </div>
  );
}

export default App;
