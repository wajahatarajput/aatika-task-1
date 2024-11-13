
import React, { useState } from 'react';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './components/Sidebar.css';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="d-flex">
        <div className={`sidebar ${isSidebarOpen ? '' : 'collapsed'}`}>
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className={`main-content content ${isSidebarOpen ? '' : 'expanded'}`}>
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
