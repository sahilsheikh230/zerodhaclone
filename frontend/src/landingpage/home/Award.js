import React from "react";
export default function Award(){
   return (
    <div class="container  mt-5 mb-5">
  <div class="row ">
    <div class="col-6">
      <h1 className="mb-5 mt-5">Trust with Confidence</h1>
      <div className="awardsp ">
        <h1>Customer-first Always</h1>
        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
      </div>
      <div className="awardsp">
        <h1>No spam or gimmicks</h1>
        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
      </div>
      <div className="awardsp">
        <h1>The Zerodha universe</h1>
        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
      </div>
      <div className="awardsp">
        <h1>Do better with money</h1>
        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
      </div>
      
    </div>
    <div class="col-6">
      <img src="/images/ecosystem.png" className="awardimg" alt="eco"></img>
      <div >
    <div className="explore mt-3">   <a href="/" className=" explore ">Explore Our Products</a> <a href="/" className="try">Try Kite Demo</a></div> 
  
      </div>
    </div>
    
  </div>
  <div className="text-center mt-5 mb-5">
    <img src="https://zerodha.com/static/images/press-logos.png" alt="links" className="mb-5"></img>
  </div>
</div>
   )
}