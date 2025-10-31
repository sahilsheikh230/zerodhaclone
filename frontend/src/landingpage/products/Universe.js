import { Link } from "react-router-dom"
export default function Universe(){
    return(
    <div className="mt-5 mb-5 text-center">
    <h5 className="mb-5 ">Want to know more about our technology stack? Check out the <a href="/"> Zerodha.tech </a>blog.</h5>
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
  <div className="row  d-flex justify-content-center  gap-5 universeimage mt-5 mb-5">
    <div className=" mt-5 mb-3 p-4 col-6">
<img src="https://zerodha.com/static/images/partners/zerodhafundhouse.png" alt=""></img>
<p className="mt-4 mb-5">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
<img src="https://zerodha.com/static/images/products/streak-logo.png" alt=""></img>
<p className="mt-4 mb-5">Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
    </div>
    <div className=" mt-5 mb-3 p-4 col-6">
      <img src="https://zerodha.com/static/images/products/sensibull-logo.svg" alt=""></img>
<p className="mt-4 mb-5">Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
<img src="https://zerodha.com/static/images/products/smallcase-logo.png" alt=""></img>
<p className="mt-4 mb-5">Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
    </div>
    <div className="mt-5 mb-3 p-4 col-6">
      <img src="https://zerodha.com/static/images/partners/tijori.svg" alt=""></img>
<p className="mt-4 mb-5">Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p >

<img src="https://zerodha.com/static/images/products/ditto-logo.png" alt=""></img>
<p className="mt-4 mb-5">Personalized advice on life
and health insurance. No spam
and no mis-selling.
</p>
    </div>
  </div>
          <button type="button" className="signup btn btn-primary p-2 mb-5  mx-auto"> <Link to="/signup" style={{textDecoration:"none",color:
               "white"
              }}> Sign up for free </Link></button> 
  </div>
  
   
    )
}