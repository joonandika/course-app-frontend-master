import React,{useState,useEffect} from 'react';
import Firebase from '../firebase';
import firestore from 'firebase/firestore';
import Header from './header';
import Base from '../pages/base';
import  Carousel from './carousel';
import AntCarousel from './antcarousel';
import { Layout } from 'antd';


const {  Content } = Layout;
const Test = ()=>{
    const [data, setData] = useState([""]);
    
    useEffect(()=>{
         var db = Firebase.firestore();
         db.collection("Categories").get().then((querySnapshot) => {
             console.log(querySnapshot);
            })

     },[]);
    return (
        
         <Base>
         <div className="container-fluid">
             <div className="row text-center">
                 <div className="col-12">
                 <Carousel/>
                 </div>
             </div>
         </div>
         
          
         </Base>
     
    )
}
export default Test;