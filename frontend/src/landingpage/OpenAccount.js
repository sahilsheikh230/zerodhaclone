import React from "react";
import  {Link} from "react-router-dom";
export default function OpenAccount(){
   return (
    <div className="container mt-5 mb-5">
        <div className="row text-center">
           <h1 className="mb-4">Open a Zerodha account</h1>
           <p className="mb-5">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
     <button type="button" className="signup btn btn-primary p-2 mb-5  mx-auto"> <Link to="/signup" style={{textDecoration:"none",color:
      "white"
     }}> Sign up for free </Link></button> 
        </div>
        
    </div>
   )
}