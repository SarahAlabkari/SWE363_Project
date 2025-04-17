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
import TourCenter from './pages/TourCenter';


import CreateAccount from './pages/CreateAccount';
import CreateActivityProviderAccount from './pages/CreateActivityProviderAccount';
import CreateTourGuideAccount from './pages/CreateTourGuideAccount';
import CreateTouristAccount from './pages/CreateTouristAccount';
import ForgetPassword from './pages/ForgetPassword';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';

//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import CreateEvent from './pages/CreateEvent';

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
<<<<<<< HEAD
        <Route path="/pages/events" element={<Events />} />
        <Route path="/pages/event/:eventId" element={<EventDetail />} />
        <Route path="/pages/create-event" element={<CreateEvent />} />
=======
        <Route path="/TourCenter" element={<TourCenter />} />

        
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/CreateActivityProviderAccount" element={<CreateActivityProviderAccount />} />
        <Route path="/CreateTourGuideAccount" element={<CreateTourGuideAccount />} />
        <Route path="/CreateTouristAccount" element={<CreateTouristAccount />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
>>>>>>> a62aa412a866c59da526e4215b812d751320f9fb
      </Routes>
    </div>
  );
}

export default App;
