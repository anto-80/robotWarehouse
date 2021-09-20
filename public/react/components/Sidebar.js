import React, {useState} from 'react';

 const Sidebar = (props) => {


function handleClick(e) {

    e.preventDefault();
    console.log('clicked');
}



    return (
        <div>

<div className="bg-white" id="sidebar-wrapper">
    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
      <i className="fas fa-robot" /> Houston Dynamics
    </div>
    <div className="list-group list-group-flush my-3">
      <a
        href="#" onClick={handleClick}
        className="list-group-item list-group-item-action bg-transparent second-text active"
      >
        <i className="fas fa-tachometer-alt me-2" />
        Dashboard
      </a>
      <a
        href="#" onClick={handleClick}
        className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
      >
        <i className="fas fa-warehouse" /> Warehouses
      </a>
      <a
        href="#" onClick={handleClick}
        className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
      >
        <i className="fas fa-chart-line me-2" />
        Analytics
      </a>
      <a
        href="#" onClick={handleClick}
        className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
      >
        <i className="fas fa-gift me-2" />
        Robots
      </a>
    </div>
  </div>
        </div>
    )
}

module.exports = Sidebar