import React, { useState, useEffect } from 'react';

import { ItemContainer} from './ItemContainer'

export const App = () => {
	/*
	1st arg = what is the state element called? (sauces)
	2nd arg = what function will update the state? (setSauces)

	*/
	const [sauces, setSauces]  = useState([]) //what do we want our default state to be?

	async function fetchSauces() {
  		try {
  			const response = await fetch('http://localhost:3000/sauces');
  			const responseJSON = await response.json()

  			console.log("WHAT IS OUR RES? ", responseJSON);	

  			setSauces(responseJSON.sauces)
  		} catch(err) {
  			console.log("OH NO AN ERROR! ", err)
  		}
  	} 
  
	//takes a callback function, where we put our fetch!
  	useEffect(() => {
  		fetchSauces()
  	}, []) //pass an empty array to run just once!

	//return everything in nested pair of tags
	return(
		<div>
			<h2></h2>
			<div class="d-flex" id="wrapper">
                
                <div class="bg-white" id="sidebar-wrapper">
                    <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                            class="fas fa-robot"></i> Houston Dynamics</div>
                    <div class="list-group list-group-flush my-3">
                        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text active"><i
                                class="fas fa-tachometer-alt me-2"></i>Dashboard</a>
                        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                class="fas fa-warehouse"></i> Warehouses</a>
                        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                class="fas fa-chart-line me-2"></i>Analytics</a>
                        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                class="fas fa-paperclip me-2"></i>Reports</a>
                        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                class="fas fa-shopping-cart me-2"></i>Store Mng</a>
                        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                class="fas fa-gift me-2"></i>Robots</a>
                        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                class="fas fa-comment-dots me-2"></i>Chat</a>
                        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                class="fas fa-map-marker-alt me-2"></i>Outlet</a>
                        <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                                class="fas fa-power-off me-2"></i>Logout</a>
                    </div>
                </div>
               
        
               
                <div id="page-content-wrapper">
                    <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                            <h2 class="fs-2 m-0">Dashboard</h2>
                        </div>
        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
        
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fas fa-user me-2"></i>John Doe
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Profile</a></li>
                                        <li><a class="dropdown-item" href="#">Settings</a></li>
                                        <li><a class="dropdown-item" href="#">Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
        
                    <div class="container-fluid px-4">
                        <div class="row g-3 my-2">
                            <div class="col-md-3">
                                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-2">50</h3>
                                        <p class="fs-5">Robots</p>
                                    </div>
                                    <i class="fas fa-robot fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>
        
                            <div class="col-md-3">
                                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-2">40</h3>
                                        <p class="fs-5">Assigned</p>
                                    </div>
                                    <i
                                        class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>
        
                            <div class="col-md-3">
                                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-2">30</h3>
                                        <p class="fs-5">Warehouses</p>
                                    </div>
                                    <i class="fas fa-warehouse fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>
        
                            <div class="col-md-3">
                                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-2">%25</h3>
                                        <p class="fs-5">Increase</p>
                                    </div>
                                    <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>
                        </div>
        
                        <div class="row my-5">
                            <h3 class="fs-4 mb-3">Recent Orders</h3>
                            <div class="col">
                                <table class="table bg-white rounded shadow-sm  table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" width="50">#</th>
                                            <th scope="col">Robot Name</th>
                                            <th scope="col">Assigned company</th>
                                            <th scope="col">Type of Robot</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>T800</td>
                                            <td>Skynet</td>
                                            <td>Terminator</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>R2D2</td>
                                            <td>Star Wars</td>
                                            <td>sidekick</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Star scream</td>
                                            <td>Decepticons</td>
                                            <td>F35 combat aircraft</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>w1206</td>
                                            <td>GM</td>
                                            <td>Welder</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>p456</td>
                                            <td>Sherwin Williams</td>
                                            <td>Color Mixer</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>A675</td>
                                            <td>Toyota</td>
                                            <td>Assembly</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>X768</td>
                                            <td>Amazon</td>
                                            <td>Packing/Palletizing</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>Data</td>
                                            <td>Starship USS Enterprise</td>
                                            <td>Intelligence analyst</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">11</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">12</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
            
            </div>
		
	)
}