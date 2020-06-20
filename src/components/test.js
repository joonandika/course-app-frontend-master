import React,{useState,useEffect} from 'react';
import Firebase from '../firebase';
import Base from '../pages/base';
import  CarouselCard from './carousel';
import { Layout } from 'antd';
import CategoryCards from './CategoryCards';
import ListingCard from './listingCard';
import { categories } from '../categories';
import Model from './detailsModel';

const Test = ()=>{
    const [city, setCity] = useState("none");
    const [selectCourse,setCourse] = useState("All");
   
    
    useEffect(()=>{
        
     },[]);

    return (
        
         <Base>
         <div className="container-fluid p-0 ">
             <div className="row text-center">
                 <div className="col-12 p-0">
                     <div className="title" style={{zIndex:12,position:"absolute",top:"12vw",fontSize:"900px",left:"19vw",color:"white"}}>
                         <h1 style={{color:"white",background:"rgb(71,198,183)",
                         background:" linear-gradient(158deg, rgba(71,198,183,1) 0%, rgba(20,214,157,0.8435749299719888) 38%, rgba(0,212,255,1) 99%)",
                         fontSize:"5vw",
                         boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                         }}>Find Colleges of Your choice</h1>
                     </div>
                 <CarouselCard/>
                 
                 </div>
                 
             </div>
             <div className="row text-center">
                 <div className="col-12 p-0">
                 <h2 className="text-center">
                     Courses
                 </h2>
                 </div>
                 
             </div>
             <div className="row  text-center" >
               <div className="col-12" >
                   {
                       categories.map((val,ind)=>{
                           return (
                               <div id="courseCard" style={{"display":"inline-block"}} onClick={()=>{setCourse(val);}}>
                                   {val}
                               </div>
                           )
                       })
                   }
               </div>
              
             </div>
             <div className="row container-fluid">
                
                  {
                      selectCourse ==="All" && (
                          <ListingCard name="All"/>
                      )
                      
                  }
                   {
                      selectCourse ==="Hair" && (
                          <ListingCard name="Hair"/>
                      )
                      
                  }
                  {
                      selectCourse ==="Makeup" && (
                          <ListingCard name="Makeup"/>
                      )
                      
                  }
                  {
                      selectCourse ==="Beauty" && (
                          <ListingCard name="Beauty"/>
                      )
                      
                  }
                  {
                      selectCourse ==="Spa" && (
                          <ListingCard name="Spa"/>
                      )
                      
                  }
                  {
                      selectCourse ==="Nail" && (
                          <ListingCard name="Nail"/>
                      )
                      
                  }
                   {
                      selectCourse ==="Mehandi" && (
                          <ListingCard name="Mehandi"/>
                      )
                      
                  }
                  {
                      selectCourse ==="Skin" && (
                          <ListingCard name="Skin"/>
                      )
                      
                  }
                  {
                      selectCourse ==="Cosmetology" && (
                          <ListingCard name="Cosmetology"/>
                      )
                      
                  }
         
                  
                 
                  
                  
                  
                 
                
            </div>
         </div>
         </Base>
     
    )
}
export default Test;