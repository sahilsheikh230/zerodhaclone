
export default function Left({image,heading,para,link1,link2}){

   return (
    <div className="container mb-5 mt-5">
     
        <div className="row text-center ">
            <div className="col-8 ">
                <img src={image} alt=""></img>
            </div>
            <div className="col-4 mt-5 text-start ">
                <h1 className="mb-3">{heading}</h1>
                
                <p>{para}
                </p>
            <a href="/" className=" ms-3">{link1} </a> <a href="/" className="ms-5">{link2} </a>
            
            <div >
                <img src="https://zerodha.com/static/images/google-play-badge.svg" alt="google" className="mt-3"></img>
                            <img src="https://zerodha.com/static/images/appstore-badge.svg" alt="ios" className="mt-3 ms-3"></img>
            </div>
            
            
            </div>
        </div>
    </div>
   )
}