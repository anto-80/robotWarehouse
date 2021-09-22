import React, { useState } from 'react';

const Warehouses = (props) => {



    return (
       <div>
           <h2>Warehouses:</h2>
            <table class="table bg-white rounded shadow-sm  table-hover">
            
            <thead>
                                        <tr>
                                            <th scope="col" width="50">#</th>
                                            <th scope="col">Warehouse Name</th>
                                            <th scope="col">Size</th>
                                            <th scope="col">Location</th>
                                        </tr>
                                    </thead>
			{
			
        props.warehouses.map((warehouse, i) => {
        return (<tbody>
            <tr key={i}>
                <th scope="row">{warehouse.id}</th>
                <td>{warehouse.name}</td>
                <td>{warehouse.size}</td>
                <td>{warehouse.location}</td>
            </tr>
        </tbody>)
        })
            }
		</table>
       </div> 
    )
}
module.exports = Warehouses