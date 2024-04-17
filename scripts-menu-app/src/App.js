import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScriptCards from './assets/ScriptCards';
import Progress from './assets/Progress';
import Admin from './assets/Admin';
import NavTabs from './assets/NavTab'; // Import NavTabs component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Top bar container */}
        <div className="d-flex justify-content-between align-items-center top-bar">
          {/* Navigation tabs */}
          <NavTabs /> {/* Use NavTabs component */}

          {/* Minimize button */}
          <button className="minimize-button btn btn-outline-secondary" onClick={() => window.minimize()}>Minimize</button>
        </div>

        {/* Tab content */}
        <div className="tab-content">
          <Routes>
            <Route path="/" element={<ScriptCards />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;