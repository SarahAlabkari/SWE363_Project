import './App.css';
import DropdownMenu from './components/DropdownMenu';
import CalendarComponent from './components/CalendarComponent';
//import PlanExperience from './pages/PlanExperience';
import { Routes, Route } from 'react-router-dom';
import Payment from './pages/Payment';
import React from "react";
import Home from "./pages/Home";
import TourGuides from "./pages/TourGuides"
import GuideProfile from './pages/GuideProfile';
import GuideDashboard from "./pages/GuideDashboard";
import MyPlan from './pages/MyPlan';
import About from './pages/About';
import MyWishList from "./pages/MyWishList";


function App() {
  return (
    <div className="App">
        <Routes>
          {/* <Route path="/" element={<PlanExperience />} /> */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/TourGuides" element={<TourGuides />} />
          <Route path="/guide/:guideName" element={<GuideProfile />} />
          <Route path='/GuideDashboard' element={<GuideDashboard />} />
          <Route path="/pages/About" element={<About/>}></Route>
          <Route path="/pages/MyWishList" element={<MyWishList/>}></Route>
          <Route path="/pages/MyPlan" element={<MyPlan />} />
          {/* <Route path='/ToursCenter' element={<ToursCenter />} /> */}
        </Routes>
    </div>
  );
}

export default App;
