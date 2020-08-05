import React from 'react';
import { NavLink } from "react-router-dom";
function Common(props) {
  return (
   <>
   <section id="header" className="d-flex align-items-center">
   <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row pt-5">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justfy-contect-center flex-column">
<h1>{props.name}<strong className="brand-name">  DADs Web Era </strong></h1>
<p className="my-3 para">
DADs is one of the most trusted Digital Marketing Institute and Company in who is setting new benchmarks in providing the most advanced Digital Marketing Course & Best Digital Marketing Services in India at a very reasonable price. 
We are a one stop solution for all your Digital Marketing needs whether you’re looking for social media ads such as Facebook ads, Instagram ads, Twitter ads, Linkedin Ads etc., or you want to rank your new website in the search engine and engage new customers or maybe you want to launch your Website, Blog or an Android application. For more insights in our services, click here.
We take immense pride in delivering the best results to our happy customers, Our success speaks of itself.</p>
<div className="mt-3">
    <NavLink to={props.visit} className="btn btn-outline-primary">{props.btname}</NavLink>
</div>
                    </div>
               
                <div className="col-lg-6 order-1 order-lg-2 header-img">

                     <img src={props.imgsrc} className="img-fluid animated"/>
                     </div>
                </div>
                </div>
            </div>
        </div>

   </section>

   </>
  );
}

export default Common;
