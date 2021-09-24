import React, { useState } from 'react';

const Robots = (props) => {



    return (
       <div>
           <h2>All Robots:</h2>
            <table class="table bg-white rounded shadow-sm  table-hover">
            <thead>
                
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Robot Name</th>
                                            <th scope="col">Type</th>
                                            
                                        </tr>
                                    </thead>
			{
			
        props.robots.map((robot, i) => {
        return (<tbody>
            <tr key={i}>
                <th scope="row">{robot.id}</th>
                <td>{robot.name}</td>
                <td>{robot.type}</td>
    
            </tr>
        </tbody>)
        })
            }
		</table>
       </div> 
    )
}
module.exports = Robots