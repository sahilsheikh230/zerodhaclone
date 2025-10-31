export default function Hero(){
    return (
<div className=" supporthero mb-5 ">
    <div className="row    ">
        <div className="col-10 ">
        <h1 className="supporth1 fs-1 ms-5 mt-4">Support Portal</h1>

        
        
         </div>
         <div className="col-2">
            <button type="submit" className= " mt-4 supportticket btn btn-primary  mx-auto">My tickets</button>
         </div>
         </div>
        
<div className="input-group input-group-lg mb-5 mt-4 ms-5 supportdiv">
  <span className="input-group-text search " id="inputGroup-sizing-lg"><i className="fa-solid supporticon fa-magnifying-glass"></i></span>
  <input type="text" className=" supportinput form-control" placeholder="Eg: How do i open my account,How do i activate my F&O..."  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
</div>
</div>


    )
}