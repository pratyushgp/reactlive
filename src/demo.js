import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import Sdata from "./Sdata";
 //console.log(Sdata[0]);
//  const ncard = (val)=>{
//    return(
//     <Card 
//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}
//     />
//    )
//  }

ReactDOM.render(
  <>
  <h1 className="heading_style">Top Netflix Series</h1>
    {Sdata.map((val, index)=>{
   return(
    <Card 
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
    />
   )
 })}
    
    </>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
