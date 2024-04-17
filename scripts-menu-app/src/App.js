import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ScriptCards from './assets/ScriptCards';
import Progress from './assets/Progress';
import Admin from './assets/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Top bar container */}
        <div className="top-bar">
          {/* Navigation tabs */}
          <nav className="nav nav-tabs">
            <NavLink to="/" className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")} end>
              Run Script
            </NavLink>
            <NavLink to="/progress" className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}>
              Progress
            </NavLink>
            <NavLink to="/admin" className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}>
              Admin
            </NavLink>
          </nav>

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