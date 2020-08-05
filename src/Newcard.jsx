import React from 'react';
import './App.css';
import web from "../src/images/back.png";
import { NavLink } from 'react-router-dom';


function Newcard(props) {
  return (
   <>
    <div className="col-md-4 col-10 mx-auto">

<div className="card">
<img src={props.imgsrc} className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">{props.title}</h5>
  <p className="card-text">{props.details}</p>
<NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
</div>
</div>


</div>
   </>
  );
}

export default Newcard;
