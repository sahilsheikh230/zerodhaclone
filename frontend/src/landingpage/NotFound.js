import React from "react";
import { Link } from "react-router-dom";
export default function OpenAccount(){
   return (
    <div className="container mt-5 mb-5">
        <div className="row text-center">
           <h1 className="mb-5">NOT FOUND 404</h1>
           <p className="mb-4 p-2">The page you are looking for cannot be found</p>
        <Link to="/" className=" btn btn-primary p-2 mb-5  mx-auto">Go back to home</Link>
        </div>
        
    </div>
   )
}