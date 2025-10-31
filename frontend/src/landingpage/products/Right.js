export default function Right({image,heading,para,link}){

         return (
    <div className="container mb-5 mt-5">
     
        <div className="row ">
            
            <div className="col-4 mt-5 text-start ">
                <h1 className="mt-5 pt-5">{heading}</h1>
                
                <p className="pb-3 ">{para}</p>
               <a href="/"> {link} →</a>
            </div>
            <div className="col-8 mb-5  text-center pb-5   ">
                <img src={image} alt=""  className="rightimage "></img>
            </div>
         
        </div>
    </div>
   )
    
}