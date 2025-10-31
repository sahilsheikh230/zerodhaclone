

import { watchlist } from "../data/data";
import { DoughnutGraph } from "./Doughnut";


import TopBaritem from "./TopBaritem";

export default function TopBar(){



  
const labels = watchlist.map((subArray) => subArray["name"]);

const data={
  labels,
   datasets: [
    {
      label: "Price",
      data: watchlist.map((stock) => stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
    
  ]
}
    return(
     
            <div className="Topbar">
                <div >
                    <div className="d-flex justify-content-around mt-4" style={{borderBottom:"0.3px solid #e0e0e0"}} >
                        <div className="d-flex gap-4">
                    <p className="m-0">NIFTY 50</p>
                    <p style={{color:"red"}}>0.0</p>
                      <p style={{color:"#929292"}}>0</p> 
                    </div>
                    <div className="d-flex gap-4 mb-3">
                     <p>SENSEX</p>
                    <p style={{color:"red"}}>0.0</p>  
                     <p style={{color:"#929292"}}>0</p> 
                    </div>

                        </div>
                </div>
               
            
             <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/50</span>
        <ul>
            {watchlist.map((stock,index)=>{
          return    <TopBaritem  stock={stock} key={index}></TopBaritem>
            })}
        </ul>
        <DoughnutGraph data={data}></DoughnutGraph>
        
        
        </div>
       
    )
}