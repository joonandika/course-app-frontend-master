import React from 'react';
const   Carousel = ()=>{
    
   return (
       <div className="carousel slide" data-ride="carousel" >
         <ol className="carousel-indicators">
           <li  data-slide-to="0" className="active">
           </li>
           <li  data-slide-to="1"></li>
           <li  data-slide-to="2"></li>
           <li  data-slide-to="3"></li>

         </ol>
         <div className="carousel-inner" style={{maxHeight:"400px"}}>
         <div className="carousel-item active" >
               <img  className="d-block  img-fluid" src="./images/a1.jpg" alt="First slide"/>
             </div>
             <div className="carousel-item ">
               <img className="d-block img-fluid" src="./images/a2.jpg" alt="second slide"/>
             </div>
             <div className="carousel-item ">
               <img className="d-block img-fluid" src="./images/a4.jpg" alt="third slide"/>
             </div>
             <div className="carousel-item ">
               <img className="d-block img-fluid" src="./images/a9.jpg" alt="third slide"/>
             </div>
             <a className="carousel-control-prev"  role="button" data-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="sr-only">Previous</span>
             </a>
             <a className="carousel-control-next" role="button" data-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="sr-only">Next</span>
             </a>
            
         </div>
       </div>
   )

};
export default Carousel;