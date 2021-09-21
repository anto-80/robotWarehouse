import React, { useState } from 'react';

const Robots = (props) => {



    return (
       <div>
            <table class="table bg-white rounded shadow-sm  table-hover">
            <thead>
                                        <tr>
                                            <th scope="col" width="50">#</th>
                                            <th scope="col">Robot Name</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Assigned</th>
                                        </tr>
                                    </thead>
			{
			
        props.robots.map((robot, i) => {
        return (<tbody>
            <tr key={i}>
                <th scope="row">{robot.id}</th>
                <td>{robot.name}</td>
                <td>{robot.type}</td>
                <td>{robot.assigneds}</td>
            </tr>
        </tbody>)
        })
            }
		</table>
       </div> 
    )
}
module.exports = Robots