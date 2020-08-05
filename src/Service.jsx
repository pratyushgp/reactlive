import React from 'react';
import Newcard from './Newcard';
import Newdata from './Newdata';


function Service() {
  return (
   <>
   
   <div className="my-5 col-10 mx-auto">
   <div className="row">
     <h1 className="text-center">Our services</h1><hr/>
   </div>
   </div>
   <div className="contrainer-fluid mb-5">
<div className="row">
  <div className="col-10 mx-auto">
    <div className="row gy-4">
    {Newdata.map((val, index)=>{
   return(
    <Newcard 
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    details={val.details}
    />
   )
 })}

    </div>
  </div>
</div>
   </div>
   </>
  );
}

export default Service;
