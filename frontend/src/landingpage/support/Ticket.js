export default function Ticket(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="mb-3 ticketsupport">
       <span className="plus" style={{backgroundColor:"#f5f2f2"}} >    <i className="fa-solid fs-3 fa-plus" style={{color:"#397DD0"}}></i>           </span>    
             <select class="form-select  supportselect form-select-lg " aria-label="Large select example">
  <option selected>Account Opening</option>
  <ul>
 <li> <option value="1"><a href="/">Resident individual</a></option></li>
   <li> <option value="1"><a href="/">Resident individual</a></option></li>
    <li> <option value="1"><a href="/">Resident individual</a></option></li>
  </ul>
</select>
</div>
                <div className="mb-3 ticketsupport">
       <span className="plus" style={{backgroundColor:"#f5f2f2"}} >    <i className="fa-solid fs-3 fa-plus" style={{color:"#397DD0"}}></i>           </span>    
             <select class="form-select  supportselect form-select-lg " aria-label="Large select example">
  <option selected>Your Zerodha Acccount</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>                <div className="mb-3 ticketsupport">
       <span className="plus" style={{backgroundColor:"#f5f2f2"}} >    <i className="fa-solid fs-3 fa-plus" style={{color:"#397DD0"}}></i>           </span>    
             <select class="form-select  supportselect form-select-lg " aria-label="Large select example">
  <option selected>Kite</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>      
                </div>
            </div>
        </div>
    )
}