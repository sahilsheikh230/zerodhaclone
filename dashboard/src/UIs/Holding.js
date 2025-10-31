
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { VerticalChart } from "./VerticalChart";
export default function Holding() {

  let[allHoldings,setAllholdings]=useState([]);

  
useEffect(()=>{
  axios.get("http://localhost:3000/getholdings").then((res)=>{
    setAllholdings(res.data);
  })
},[])


const labels = allHoldings.map((subArray) => subArray["name"]);

const data={
  labels,
   datasets: [
    {
      label: "stock names",
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ]
}

  return (
    <div className="dashboards">
      <h3 className="mt-4 ms-4">Holdings ({allHoldings.length})</h3>

      <div className="holdingtable">
        <hr style={{ color: "#424242" }} className="ms-3 mt-5 fs-1 me-5" />

        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. Cost</th>
              <th>LTP</th>
              <th>Cur.Value</th>
              <th>P&L</th>
              <th>Net change</th>
              <th>Day change</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curVal = stock.price * stock.qty;
              const pnl = curVal - stock.avg * stock.qty;
              const isProfit = pnl >= 0.0;

              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curVal}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
     <VerticalChart data={data}></VerticalChart>
    </div>
  );
}
