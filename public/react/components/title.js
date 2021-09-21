import React, {useState} from 'react';
// import {Link} from 'react-router-dom';

 const Title = (props) => {


    const [Title, setTitle]  = useState("Dard") 

    return (
<div>
<h2 id="main" class="fs-2 m-0">
{Title} 
</h2>
</div>       
    )
}

module.exports = Title