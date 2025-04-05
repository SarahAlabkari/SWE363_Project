import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventTryoutPage from './pages/EventTryoutPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/EventTryoutPage" element={<EventTryoutPage />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
