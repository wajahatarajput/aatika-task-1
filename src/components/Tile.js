// src/components/Tile.js
import React from 'react';
import './Tile.css';

function Tile({ data, onClick }) {
  return (
    <div className="col-md-6 col-lg-4 col-sm-12">
      <div className="card mb-4 tile-card">
        <div className="card-body p-4 position-relative">
          {/* Bun Icon (Vertical Dots) */}
          <div className="dropdown position-absolute" style={{ top: '10px', right: '10px' }}>
            <button
              className="btn btn-link p-0"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="d-inline-block" style={{ fontSize: '20px', color: '#6c757d' }}>
                &#x22EE;
              </span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#" onClick={() => alert('Edit clicked')}>Edit</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => alert('Flag clicked')}>Flag</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => alert('Delete clicked')}>Delete</a></li>
            </ul>
          </div>

          {/* Profile Image */}
          <div className="text-center mb-3">
            <img
              src={`https://i.pravatar.cc/150?img=${data.id}`}
              alt={`${data.name}'s avatar`}
              className="rounded-circle profile-img"
            />
          </div>

          {/* User Info */}
          <h5 className="card-title text-center mb-1">{data.name}</h5>
          <p className="card-text text-center">{`@${data.username}`}</p>

          {/* User Details */}
          <div className="list-group list-group-flush my-3">
            <div className="list-group-item border-0 px-0">
              <strong>Email:</strong> <span className="text-muted">{data.email}</span>
            </div>
            <div className="list-group-item border-0 px-0">
              <strong>Phone:</strong> <span className="text-muted">{data.phone}</span>
            </div>
            <div className="list-group-item border-0 px-0">
              <strong>Company:</strong> <span className="text-muted">{data.company.name}</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center mt-3">
            <button className="btn btn-warning text-white" onClick={onClick}>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tile;
