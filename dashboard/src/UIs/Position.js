import { useState } from "react";

import axios from "axios";
import { useEffect } from "react";
export default function Position(){
let [allpositions,setAllpositions]=useState([]);
useEffect(()=>{
  axios.get("http://localhost:3000/getpositions").then((res)=>{
    setAllpositions(res.data);
  })
})




    return (

    <div className="dashboards">
         <h3 className="mt-4 ms-4">Positions ({allpositions.length})</h3>
   
         <div className="holdingtable">
           <hr style={{ color: "#424242" }} className="ms-3 mt-5 fs-1 me-5" />
   
           <table>
             <thead>
               <tr>
                 <th>Product</th>
                      <th>Name</th>
                 <th>Qty.</th>
                 <th>Avg. Cost</th>
                 <th>LTP</th>
                 <th>Cur.Value</th>
                 <th>P&L</th>
                
                 <th>Day change</th>
               </tr>
             </thead>
   
             <tbody>
               {allpositions.map((stock, index) => {
                 const curVal = stock.price * stock.qty;
                 const pnl = curVal - stock.avg * stock.qty;
                 const isProfit = pnl >= 0.0;
   
                 const profClass = isProfit ? "profit" : "loss";
                 const dayClass = stock.isLoss ? "loss" : "profit";
   
                 return (
                   <tr key={index}>
                    <td>{stock.product}</td>
                     <td>{stock.name}</td>
                     <td>{stock.qty}</td>
                     <td>{stock.avg.toFixed(2)}</td>
                     <td>{stock.price.toFixed(2)}</td>
                     <td>{curVal}</td>
                     <td className={profClass}>{pnl.toFixed(2)}</td>
                    
                     <td className={dayClass}>{stock.day}</td>
                   </tr>
                 );
               })}
             </tbody>
           </table>
         </div>
       
       </div>
     );
   }
   