import { useContext, useState } from "react"
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";
import {Tooltip,Grow} from "@mui/material";
import { GeneralContext } from "./GeneralContext";
export default function TopBaritem({stock}){
   let [showWatchList,setWatch]=useState(false);
   function Onmouseenter(){
    setWatch(true);
   }
   function Onmouseleave(){
    setWatch(false);
   }
   
   
    return(
        <>
<li onMouseEnter={Onmouseenter} onMouseLeave={Onmouseleave}>
    <div className="item  d-flex justify-content-around mt-4">
        <p className={stock.isDown ?"profit":"loss"}>{stock.name}</p>

    <span className="percent">{stock.percent}</span>
    { stock.isDown ? (<KeyboardArrowDown></KeyboardArrowDown>):(<KeyboardArrowUp></KeyboardArrowUp>)}
 <span className="pprice">{stock.price}</span>

    {showWatchList   && <Actions uid={stock.name}></Actions>}
    </div>
</li>
        </>
    )
}
const Actions=({uid})=>{
    const {openBuyWindow}=useContext(GeneralContext);
return(
    <span>
        <span>
            <Tooltip placement="top" title="buy"  TransitionComponent={Grow}>
           <button className="buy" onClick={()=>{openBuyWindow(uid)}}> Buy</button>
                </Tooltip>
                <Tooltip placement="top" title="Sell"  TransitionComponent={Grow}>
                   
               <button className="Sell">  Sell</button></Tooltip>
                <Tooltip placement="top" title="Chart"  TransitionComponent={Grow}>
              <button> <BarChartOutlined></BarChartOutlined></button> </Tooltip>
                <Tooltip placement="top" title="More"  TransitionComponent={Grow}>
                <button> <MoreHoriz></MoreHoriz></button></Tooltip>
        </span>
    </span>
)
}