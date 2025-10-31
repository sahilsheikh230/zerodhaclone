export default function Brokerage(){
    return (
        <div className="container mb-5 mt-5 brokeragep">
            <h1 className="mb-5">Charges explained</h1>
            <div className="row text-center ">

                <div className="col-5 text-start ms-4">
<p className="fs-5">Securities/Commodities transaction tax</p>
<p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
<p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
     <p className="fs-5">Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
     <p>Equity and Futures - ₹10 per crore + GST of the traded value.</p>         
          <p>Options - ₹50 per crore + GST traded value (premium value).</p>    
          <p>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</p>
                </div>
                <div className="col-6 text-start ms-5 ">
                    <p className="fs-5">GST</p>
                    <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                      <p className="fs-5">DP (Depository participant) charges</p>
                      <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                      <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                      <p className="fs-5">Trading using 3-in-1 account with block functionality</p>
                      <p>Delivery & MTF Brokerage: 0.5% per executed order.</p>
                      <p>Intraday Brokerage: 0.05% per executed order.</p>
                </div>
            </div>
            <p className="fs-5 mt-3">Disclaimer</p>
            <p className="mb-5 mt-1">For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
            
        </div>
    )
} 