import React from "react";

import Hero from "./Hero";
import Award from "./Award";

import Pricing  from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
export default function HomePage(){
   return (
    <div>
        
        <Hero></Hero>
        <Award> </Award>
      
        <Pricing></Pricing>
        <Education></Education>
        <OpenAccount></OpenAccount>
        


       
    </div>
   )
}