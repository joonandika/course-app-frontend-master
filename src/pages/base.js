import React from 'react';
import Header from '../components/header';



const Base =(props)=>{
    return (
        <>
        <div className="container-fluid">
            <div className="row" >
                <div className="col-12 p-0">
                  <Header/>
                </div>
            </div>
   
            {props.children}
          
          
         
         
        </div>
        
        </>
    )
};
export default Base;