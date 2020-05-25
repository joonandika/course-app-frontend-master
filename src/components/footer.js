import React from 'react';
import { Layout } from 'antd';

const Footer = ()=>{
    return (
        <div className="container-fluid bg-primary" style={{position:"fixed", bottom:0,left:0,right:0,top:"90%"}}>
            <div className="row bg-primary" >
                <div className="col-12 dark">
                <footer className="footer">
                 <span className="text-white">
                    FTV salon academy
                 </span>
                </footer>
                </div>
            </div>
       
        </div>
    )
};
export default Footer;