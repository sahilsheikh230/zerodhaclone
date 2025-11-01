import { useContext, useState } from "react";
import { GeneralContext } from "./GeneralContext";
import axios from "axios";
export default function BuyStock({ uid }) {
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleCancelClick = () => {
    closeBuyWindow();
  };
let[stockqty,setQty]=useState(1);
let[price,setPrice]=useState(0.0);
const handleBuyClick=()=>{
    axios.post("http://localhost:3000/addorders",{
        name:uid,
        qty:stockqty,
price:price,
mode:"BUY",
    })
    closeBuyWindow();
}
  return (
    <div className="buystock" draggable="true">
      <label htmlFor="qty">Qty.</label>
      <div className="d-flex gap-2 mb-3">
        <input className="stockinput" id="qty" type="number" name="qty" onChange={(e)=>{
            setQty(e.target.value);
          }} value={stockqty} />
        <input
          className="stockinput"
          id="price"
          type="number"
          name="price"
          placeholder="price"
          onChange={(e)=>{
            setPrice(e.target.value);
          }}
          value={price}
        />
      </div>
      <div className="d-flex gap-3 ">
        <p style={{ fontSize: "14px" }}>Margin required Rs. 140.55</p>
        <button style={{ height: "30px" }} onClick={handleBuyClick}>Buy</button>
        <button style={{ height: "30px" }} onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </div>
  );
}
