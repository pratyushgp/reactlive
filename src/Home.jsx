import React from 'react';
import web from "../src/images/back.png";
import { NavLink } from "react-router-dom";
import Common from './Common';

function Home() {
  return (
   <>
   <Common name="Grow Your Business with" imgsrc={web} visit="/Service" btname="Get Strated" />


   </>
  );
}

export default Home;
