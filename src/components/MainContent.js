// src/components/MainContent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tile from './Tile';
import ExpandedView from './ExpandedView';

function MainContent() {
  const [data, setData] = useState([]);  // Store employee data
  const [view, setView] = useState('grid');  // View type ('grid', 'tile', 'expanded')
  const [selectedData, setSelectedData] = useState(null);  // Store selected employee data
  const [isModalOpen, setIsModalOpen] = useState(false);  // Modal visibility state


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setData(response.data)) // Fetch employee data
      .catch(error => console.error(error));
  }, []);

  // Handle click event to switch to expanded view
  const handleTileClick = (item) => {
    setSelectedData(item);  // Set the selected data
    setView('expanded');  // Switch to expanded view
    setIsModalOpen(true);  // Open the modal
  };

  // Handle back event to return to tile view
  const handleBackToTileView = () => {
    setView('grid');  // Switch to grid (tile) view
    setSelectedData(null);  // Clear selected data
    setIsModalOpen(false);  // Close the modal
  };

  return (
    <div className="container mt-3">
      {view === 'grid' && (
        <div className="row">
          {data.map(item => (
            <Tile key={item.id} data={item} onClick={() => handleTileClick(item)} />
          ))}
        </div>
      )}

      {view === 'expanded' && isModalOpen && (
        <ExpandedView data={selectedData} onBack={handleBackToTileView} />
      )}
    </div>
  );
}

export default MainContent;

