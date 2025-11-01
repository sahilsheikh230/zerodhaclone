

import React from "react" 
import { useState } from "react"
import BuyStock from "./BuyAction";

 export const GeneralContext=React.createContext({
    openBuyWindow:(uid)=>{},
    closeBuyWindow:()=>{},
})
export const GeneralContextProvider=(props)=>{
    let[isBuyOpen,setIsBuy]=useState(false);
    const [stockid,setStockid]=useState("");

    const handleopenwindow=(uid)=>{
        setIsBuy(true);
        setStockid(uid);
    
}
const handleclosewindow=()=>{
      setIsBuy(false);
        setStockid("");
}
return(
    <GeneralContext.Provider
    value={{
        openBuyWindow:handleopenwindow,
        closeBuyWindow:handleclosewindow,
    }}
    >
        {props.children}
{isBuyOpen && <BuyStock uid={stockid}></BuyStock>}
    </GeneralContext.Provider>
)
}