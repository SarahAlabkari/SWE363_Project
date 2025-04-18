// Path: src/App.js

// Import global styles
import './App.css';

// Import component files
import DropdownMenu from './components/DropdownMenu';
import CalendarComponent from './components/CalendarComponent';

// Import pages
import WhereTo from './pages/WhereTo';
import Payment from './pages/Payment';
import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom"; // React Router imports
import Home from "./pages/Home";
import TourGuides from "./pages/TourGuides";
import GuideProfile from './pages/GuideProfile';
import ActivityDetails from './pages/ActivityDatails';
import TourDetails from './pages/TourDetails';
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
import TestError from './pages/TestError';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import CreateEvent from './pages/CreateEvent';
import UserManagementPage from './pages/UserManagement';
function App() {
  return (
    <div className="App">
      {/* Define all application routes */}
      <Routes>
        <Route path="/WhereTo" element={<WhereTo />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/TourGuides" element={<TourGuides />} />
        <Route path="/guide/:guideName" element={<GuideProfile />} />
        <Route path="/GuideDashboard" element={<GuideDashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/MyWishList" element={<MyWishList />} />
        <Route path="/MyPlan" element={<MyPlan />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/event/:eventId" element={<EventDetail />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path='/ActivityDetails/:id' element={<ActivityDetails />} />
        <Route path='/TourDetails/:id' element={<TourDetails />} />
        <Route path="/TourCenter" element={<TourCenter />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/CreateActivityProviderAccount" element={<CreateActivityProviderAccount />} />
        <Route path="/CreateTourGuideAccount" element={<CreateTourGuideAccount />} />
        <Route path="/CreateTouristAccount" element={<CreateTouristAccount />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path='/TestError' element={<TestError />} />
        <Route path="/UserManagement" element={<UserManagementPage/>} />
      </Routes>
    </div>
  );
}

export default App;
