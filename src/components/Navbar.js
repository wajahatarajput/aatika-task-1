// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ toggleSidebar }) {
  // State to track whether the navbar is collapsed or expanded
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to toggle collapse state
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="btn btn-transparent text-white me-3" onClick={toggleSidebar}>
        ☰
      </button>
      <a className="navbar-brand" href="/">Employee Viewer</a>

      {/* Toggle button for mobile screens */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggle} // Use the custom handleToggle function
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible navbar content */}
      <div className={`collapse navbar-collapse ${isCollapsed ? 'd-none' : 'd-flex'} justify-content-end align-items`} id="navbarNav">
        <div className="navbar-nav ms-auto">
          <a className="nav-item nav-link" href="/">Home</a>
          <a className="nav-item nav-link" href="/about">About</a>
          <a className="nav-item nav-link" href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
