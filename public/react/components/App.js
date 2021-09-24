import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import Sidebar from './Sidebar';
import Robots from './Robots';
import Warehouses from './Warehouses';
import Assigned from './Assigned';





export const App = () => {
	
	const [robots, setRobots]  = useState([]) //what do we want our default state to be?
    const [warehouses, setWarehouses]  = useState([]) 
    const [assigneds, setAssigneds]  = useState([]) 
	async function fetchRobots() {
  		try {
  			const response = await fetch('http://localhost:3000/robots');
  			const responseJSON = await response.json()

  			console.log("WHAT IS OUR RES? ", responseJSON);	

  			setRobots(responseJSON.robots)
  		} catch(err) {
  			console.log("OH NO AN ERROR! ", err)
  		}
      } 
      async function fetchWarehouses() {
        try {
            const response = await fetch('http://localhost:3000/warehouses');
            const responseJSON = await response.json()

            console.log("WHAT IS OUR RES? ", responseJSON);	

            setWarehouses(responseJSON.warehouses)
        } catch(err) {
            console.log("OH NO AN ERROR! ", err)
        }
    } 
    async function fetchAssigneds() {
        try {
            const response = await fetch('http://localhost:3000/assigneds');
            const responseJSON = await response.json()

            console.log("WHAT IS OUR RES? ", responseJSON);	

            setAssigneds(responseJSON.assigneds)
        } catch(err) {
            console.log("OH NO AN ERROR! ", err)
        }
    } 
  
	//takes a callback function, where we put our fetch!
  	useEffect(() => {
          fetchRobots();
          fetchWarehouses();
          fetchAssigneds();
  	},[]); //pass an empty array to run just once!
    //return everything in nested pair of tags
    
	return(



        <div>

            <div class="d-flex" id="wrapper">

                <Sidebar />
                <div id="page-content-wrapper">

                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="bg-transparent p-4">
                            <h5 class="text-white h4">Collapsed content</h5>
                            <span class="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                    </div>
                    <nav class="navbar navbar-light bg-transparent">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>



                    <div class="container-fluid px-4">
                        <div class="row g-3 my-2">
                            <div class="col-md-4">
                                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-2">{robots.length}</h3>
                                        <p class="fs-5">Robots</p>
                                    </div>
                                    <i class="fas fa-robot fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-2">{assigneds.length}</h3>
                                        <p class="fs-5">Assigned</p>
                                    </div>
                                    <i
                                        class="fas fa-tasks fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>
        
                            <div class="col-md-4">
                                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-2">{warehouses.length}</h3>
                                        <p class="fs-5">Warehouses</p>
                                    </div>
                                    <i class="fas fa-warehouse fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>
                        </div>

                        <div class="row my-5">
                            <h3 class="fs-4 mb-3"></h3>

                            
                            
			
			 
    
				  <div class="col">
                  <Route path="/robots">
				     <Robots robots={robots} />
			      </Route> 
                  <Route path="/warehouses">
                     <Warehouses warehouses={warehouses} />
                  </Route>
                  <Route path="/assigneds">
                     <Assigned warehouses={warehouses} assigneds={assigneds} robots={robots} />
                  </Route>
                            
                               
                            </div> 
		
			 
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
		
	)
}