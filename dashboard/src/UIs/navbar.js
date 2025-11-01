
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar(){
    const activeclass="activeclass";
    const simpleclass="simpleclass"
    let [menu,setMenu]=useState(0);
function handlemenu(index){
    setMenu(index);
}
    return(

   
                <div className=" nav-container mt-2 d-flex justify-content-around gap-4 ">
                  <div> <img src="https://zerodha.com/static/images/products/kite-logo.svg" alt="kitelogo"></img></div> 
                    <div className="navbara m-3 kitenav d-flex ">
            <Link to="/" className="me-3 ms-4"   onClick={()=>{handlemenu(0)}} ><p className={`${menu===0?activeclass:simpleclass} `} >Dashboard</p></Link>
          <Link to="/orders" className="me-3 ms-4"  onClick={()=>{handlemenu(1)}}><p className={menu===1?activeclass:simpleclass}>Orders</p></Link>
          <Link to="/holdings" className="me-3 ms-4"  onClick={()=>{handlemenu(2)}}><p className={menu===2?activeclass:simpleclass}>Holdings</p></Link>
          <Link to="/positions" className="me-3 ms-4"  onClick={()=>{handlemenu(3)}}><p className={menu===3?activeclass:simpleclass}>Positions</p></Link>
          <Link to="/funds" className="me-3 ms-4"  onClick={()=>{handlemenu(4)}}><p className={menu===4?activeclass:simpleclass}>Funds</p></Link>
          <Link to="/apps" className="me-3 ms-4"  onClick={()=>{handlemenu(5)}}><p className={menu===5?activeclass:simpleclass}>Apps</p></Link>
                 
            <Link to="/profil">      <p className="me-4 ms-4">    <i className="fa-solid fa-user"></i> "userID"
</p></Link>
                </div>
  
        
        </div>
    )
}