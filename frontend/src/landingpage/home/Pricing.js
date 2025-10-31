import React from "react";
export default function Pricing(){
   return (
    <div className="container mb-5  mt-5">
<div className="row mt-5 ">
   <div className="col-6">
<h1 className="mb-3 mt-5 mb-5">Unbeatable pricing</h1>
<p className="mb-3">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
   <a href="/">See pricing</a>
   </div>
    <div className="col-6 mt-5">
        <div className=" col-4 d-inline-block" >
    <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="price" ></img>
    </div>
     <div className=" col-4 d-inline-block">
    <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="price"></img>
    </div>
     <div className=" col-4 d-inline-block">
    <img src="https://zerodha.com/static/images/other-trades.svg" alt="price" ></img>
    </div>
   </div>
    </div>
    </div>
   )
}