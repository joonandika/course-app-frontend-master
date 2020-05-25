import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


const Base =(props)=>{
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                  <Header/>
                </div>
            </div>
          {props.children}
          <div className="row">
                <div className="col-12">
                  <Footer/>
                </div>
            </div>
         
        </div>
        
        </>
    )
};
export default Base;