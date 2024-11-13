// src/components/ExpandedView.js
import React from 'react';

function ExpandedView({ data, onBack }) {
  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-hidden="true" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content rounded-3 shadow-lg">
          <div className="modal-header">
            <h5 className="modal-title" id="userDetailsModalLabel">{data.name}'s Details</h5>
            {/* Close Button */}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onBack}
              style={{ position: 'absolute', top: '10px', right: '10px' }}
            />
          </div>
          <div className="modal-body">
            {/* User Profile */}
            <div className="text-center mb-4">
              <img
                src={`https://i.pravatar.cc/150?img=${data.id}`}
                alt={`${data.name}'s avatar`}
                className="rounded-circle mb-3"
                style={{ width: '120px', height: '120px', objectFit: 'cover' }}
              />
              <h5 className="mb-1">{data.name}</h5>
              <p className="text-muted">@{data.username}</p>
            </div>

            {/* User Details Section */}
            <div className="row">
              <div className="col-md-6">
                <h6 className="text-primary">Email</h6>
                <p>{data.email}</p>
              </div>
              <div className="col-md-6">
                <h6 className="text-primary">Phone</h6>
                <p>{data.phone}</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <h6 className="text-primary">Company</h6>
                <p>{data.company.name}</p>
              </div>
              <div className="col-md-6">
                <h6 className="text-primary">Website</h6>
                <p><a href={`https://${data.website}`} target="_blank" rel="noopener noreferrer">{data.website}</a></p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <h6 className="text-primary">Address</h6>
                <p>{data.address.street}, {data.address.city}, {data.address.zipcode}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandedView;