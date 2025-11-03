import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

 
import axios from "axios";

export default function Navbar() {
let[menu,setMenu]=useState(false);
function showMenu(){
  setMenu(!menu);
}


  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container d-flex justify-content-evenly  ">
        
        
        <Link to="/">
        <img
          src="https://zerodha.com/static/images/logo.svg"
          alt="zerodha"
          className="navbarlogo mb-3 mt-2"
        /></Link>

        {/* Right side - Links */}
        <div className="ms-auto navbara m-3">
          <Link to="/signup" className="me-3 ms-4">Signup</Link>
          <Link to="/about" className="me-3 ms-4">About</Link>
          <Link to="/products" className="me-3 ms-4">Products</Link>
          <Link to="/pricing" className="me-3 ms-4">Pricing</Link>
          <Link to="/support" className="me-3 ms-4">Support</Link>
         <i className="fa-solid fa-bars ms-4" style={{color:"#666666"}} onClick={showMenu}>{menu && <Menu></Menu>}</i>
        </div>
      </div>
    </nav>
  );
}
export  function Menu() {
   

 const navigate=useNavigate();

const handleDashboardClick = async () => {
  try {
    const res = await axios.get("https://zerodhabackend-ix8a.onrender.com/verifyuser", { withCredentials: true });

    if (res.data.status) {
      
      window.location.href="https://kite1045.netlify.app/";
    } else {
      alert("Please login first");
      navigate("/login"); 
    }
  } catch (err) {
    alert("Please login first");
    window.location.href = "/login";
  }
};



  return (
    <div className="menu-container d-flex gap-3 justify-content-center">
      <div>
        <img
          src="https://zerodha.com/static/images/products/kite-logo.svg"
          alt="kite"
          style={{ cursor: "pointer" }}
          onClick={handleDashboardClick}
        />
        <h5>Kite</h5>
        <h6>Trading platform</h6>
      </div>
    </div>
  );
}