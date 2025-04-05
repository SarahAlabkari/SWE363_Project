import './App.css';
import { Routes, Route } from 'react-router-dom';
import DropdownMenu from './components/DropdownMenu';
import CalendarComponent from './components/CalendarComponent';
import PlanExperience from './pages/PlanExperience';
import Payment from './pages/Payment';

function App() {
  return (
    <Routes>
    <Route path="/" element={<PlanExperience />} />
    <Route path="/payment" element={<Payment />} />
  </Routes>
  );
}

export default App;
