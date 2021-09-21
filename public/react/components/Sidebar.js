import React, {useState} from 'react';
import {Link} from 'react-router-dom';

 const Sidebar = (props) => {


    return (
        

<div className="bg-white" id="sidebar-wrapper">
    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
      <i className="fas fa-robot" /> Houston Dynamics
    </div>
    <div className="list-group list-group-flush my-3">

     <Link to="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"> 
        <i className="fas fa-tachometer-alt me-2" />Dashboard
      </Link>

      <Link to="/warehouses"  className="list-group-item list-group-item-action bg-transparent second-text fw-bold ">
        <i className="fas fa-warehouse" /> Warehouses
          </Link>

          <Link to="/robots"  className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
        <i className="fas fa-chart-line me-2" /> Robots
        </Link>

        <Link to="/analytics" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
        <i className="fas fa-gift me-2" />Analytics
        </Link>
    </div>
  </div>
        
    )
}

module.exports = Sidebar