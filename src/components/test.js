import React,{useState,useEffect} from 'react';
import Firebase from '../firebase';
import Base from '../pages/base';
import  Carousel from './carousel';
import { Layout } from 'antd';
import CategoryCards from './CategoryCards';
import ListingCard from './listingCard';
import { categories } from '../categories';

const Test = ()=>{
    const [data, setData] = useState([""]);
    const [selectCourse,setCourse] = useState("All");
    const [loading ,setLoad] = useState(true);
    
    useEffect(()=>{
         var db = Firebase.firestore();
         db.collection("hair")
         .where("courses",'array-contains',selectCourse)
         .get().then((querySnapshot) => {
                  querySnapshot.forEach((data)=>{
                      console.log(data.data());
                  })
            });

     },[]);

    return (
        
         <Base>
         <div className="container-fluid p-0 ">
             <div className="row text-center">
                 <div className="col-12 p-0">
                 <Carousel/>
                 
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
                
            </div>
         </div>
         </Base>
     
    )
}
export default Test;