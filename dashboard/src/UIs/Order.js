import { useState } from "react";

import axios from "axios";
import { useEffect } from "react";
export default function Position(){
let [allorders,setOrders]=useState([]);
useEffect(()=>{
  axios.get("https://zerodhabackend-ix8a.onrender.com/getorders").then((res)=>{
    setOrders(res.data);
  })
},[])




    return (

    <div className="dashboards">
         <h3 className="mt-4 ms-4">Orders ({allorders.length})</h3>
   
         <div className="holdingtable">
           <hr style={{ color: "#424242" }} className="ms-3 mt-5 fs-1 me-5" />
   
           <table>
             <thead>
               <tr>
              
                      <th>Name</th>
                 <th>Qty.</th>
                 <th>Price</th>
                 <th>Mode</th>
                
               </tr>
             </thead>
   
             <tbody>
               {allorders.map((stock, index) => {
                
              
   
                 return (
                   <tr key={index}>
                    
                     <td>{stock.name}</td>
                     <td>{stock.qty}</td>
                    
                     <td>{stock.price.toFixed(2)}</td>
                     <td>{stock.mode}</td>
                    
                   </tr>
                 );
               })}
             </tbody>
           </table>
         </div>
       
       </div>
     );
   }
   