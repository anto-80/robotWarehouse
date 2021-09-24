import React, { useState } from 'react';
import Form from './form';
 
const Assigneds = (props) => {
    const [assi, setAssi]  = useState("NULL") 
    function change(e) {

 props.warehouses.map((warehouse, i) => {
     var x =warehouse.id;
     var y = e.target.value ;
     
     console.log("000000000000", x)
     console.log("000000000000", y)
     if (x == y){
                                   
                                    console.log("000000000000", e.target.value)
                                     setAssi(warehouse.name)
                                    }
                                        }
        
        
       
 )}
// props.assigneds[0].WarehouseId = 1
    function checkRobot(params) {
        console.log("000000000000",params)
        props.robots.map((Robot, i) => {
            console.log("1111111111111111111",Robot.name)
            if (Robot.name==params) {
                 props.assigneds.forEach(element => {
                    console.log("2222222222222222",Robot.id) 
                    console.log("3333333333333333333",element.RobotId)
                    if (Robot.id==element.RobotId) {
                        console.log("44444444444444",element.WarehouseId)
                        if (element.WarehouseId==null) {
                            console.log("8888888888888888")                            
                            setAssi (params)
                           
                        }else{
                            props.warehouses.map((Warehouse, j) => { 
                                if (Warehouse.id==element.WarehouseId) {
                                    console.log("99999999999999",Warehouse.name)
                                    setAssi(Warehouse.name)
                                   
                                }
                            } );
                        }
                    }
                 });
            }
           
            })
    }
    return (
       <div>
           <h2>Assigned:</h2>
            <table class="table bg-white rounded shadow-sm  table-hover">
            <thead>
                                        <tr>
                                            <th scope="col" >Robots Name</th>
                                            <th scope="col">Warehouse Assigned to</th>
                                            <th scope="col">Start Date</th>
                                            <th scope="col">End Date</th>
                                        </tr>
                                    </thead>
                                    {
			
            props.assigneds.map((Assigned, i) => {
            return (<tbody>
                <tr key={i}>
                    <th scope="row">{props.robots[i].name}</th>
                    <td> {assi} <div>
			<br />
            			
			{
			        <form>
						<div>
							<label>Select the warehouse</label>
							<select onChange={change} >
								<option></option>
                                {
                                    props.warehouses.map((warehouse, i) => {
                                    return (<option key={i} value={i}>{warehouse.name}</option>)
                                    })
                                        }
							</select>
						</div>
						<button type="submit">Submit Order</button>
					</form>
				
			}
			

        </div></td>
                    <td>{Assigned.startDate}</td>
                    <td>{Assigned.endDate}</td>
                </tr>
            </tbody>)
            })
                }
        </table>
       </div>
    )
}
module.exports = Assigneds