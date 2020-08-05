import React from 'react';

function Contact() {
  return (
   <>
 <div className="my-5 col-10 mx-auto">
     <h1 className="text-center">Welcome Contact Page</h1>
     <hr/>
   </div>
   <div className="container contact_div">
     <div className="row">
       <div className="col-md-6 col-10 mx-auto">
         <form>
         <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="jonh"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Mobile</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="+91 90000 90000"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<div class="mb-3">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
         </form>
       </div>

     </div>

   </div>
   </>
  );
}

export default Contact;
