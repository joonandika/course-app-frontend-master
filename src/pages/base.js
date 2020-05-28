import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ListingCard from '../components/listingCard';


const Base =(props)=>{
    return (
        <>
        <div className="container-fluid">
            <div className="row" style={{top:"0", left:"0",right:"0",position:"relative"}}>
                <div className="col-12 p-0">
                  <Header/>
                </div>
            </div>
          {props.children}
          <div className="row container">
                <div className="col-12 p-0">
                  <ListingCard/>
                </div>
            </div>
         
        </div>
        
        </>
    )
};
export default Base;