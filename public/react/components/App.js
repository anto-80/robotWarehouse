import React, { useState, useEffect } from 'react';
import {Link , Route} from 'react-router-dom';
import Sidebar from './Sidebar';
import Title from './title';




export const App = () => {
	
	const [Robots, setRobots]  = useState([]) //what do we want our default state to be?
    const [Warehouses, setWarehouses]  = useState([]) 
    const [Assigneds, setAssigneds]  = useState([]) 
	async function fetchRobots() {
  		try {
  			const response = await fetch('http://localhost:3000/robots');
  			const responseJSON = await response.json()

  			console.log("WHAT IS OUR RES? ", responseJSON);	

  			setRobots(responseJSON.Robots)
  		} catch(err) {
  			console.log("OH NO AN ERROR! ", err)
  		}
      } 
      async function fetchWarehouses() {
        try {
            const response = await fetch('http://localhost:3000/warehouses');
            const responseJSON = await response.json()

            console.log("WHAT IS OUR RES? ", responseJSON);	

            setWarehouses(responseJSON.Warehouses)
        } catch(err) {
            console.log("OH NO AN ERROR! ", err)
        }
    } 
    async function fetchAssigneds() {
        try {
            const response = await fetch('http://localhost:3000/assigneds');
            const responseJSON = await response.json()

            console.log("WHAT IS OUR RES? ", responseJSON);	

            setAssigneds(responseJSON.Assigneds)
        } catch(err) {
            console.log("OH NO AN ERROR! ", err)
        }
    } 
  
	//takes a callback function, where we put our fetch!
  	useEffect(() => {
          fetchRobots();
          fetchWarehouses();
          fetchAssigneds();
  	}),([]); //pass an empty array to run just once!
    //return everything in nested pair of tags
    
	return(



		<div>
			
					

            	
				

			<div class="d-flex" id="wrapper">
                
               <Sidebar />
               
             
        
               
                <div id="page-content-wrapper">
                  
                    <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                            <Title/>
                        </div>
        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
        
                       
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

                            
                            <Route path="/warehouses">
                            </Route>
                            
			
			 <Route path="/warehouses">
    
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
			</Route>
			 
                           
                        </div>
        
                    </div>
                </div>
            </div>
            </div>

            
		
	)
}