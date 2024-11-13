// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar({ isSidebarOpen }) {

  return (
    <div className={`${isSidebarOpen ? 'd-flex' : 'd-none'} d-lg-flex sidebar`}>
      <a href="/" className="sidebar-link active">Dashboard</a>
      <a href="/reports" className="sidebar-link">Reports</a>
      <a href="/settings" className="sidebar-link">Settings</a>
    </div>
  );
}

export default Sidebar;
