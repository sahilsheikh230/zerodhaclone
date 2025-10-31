import React from "react";
import { Link } from "react-router-dom";
export default function Hero(){
   return (
    <div className="container mb-5">
        <div className="row text-center">
    <img src="\images\homeHero.png" className=" heroimg mb-5" alt="hero"></img>
    <h1 className="investh1 mt-5 ">Invest in Everything</h1>
    <p className="investp mb-4 ">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
     <button type="button" className="signup btn btn-primary p-2 mb-5  mx-auto"> <Link to="/signup" style={{textDecoration:"none",color:
      "white"
     }}> Sign up for free </Link></button> 
    </div>
    
    </div>
   )
}