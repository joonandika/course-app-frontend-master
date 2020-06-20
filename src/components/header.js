import React,{useState,useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';

import Firebase from '../firebase';
import { categories } from '../categories';
const Header =()=>{
  const [islogged,setLogged] = useState(false);
  useEffect(()=>{
    Firebase.auth().onAuthStateChanged(
      user=>{
         if(user){
         
          setLogged(true);
         }
         else setLogged(false);
          
      }
     );
  });
  const signout=()=>{
    Firebase.auth().signOut();
  };

 
    return (
   <div className="col-12 p-0">

  
     <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'rgba(112,208,229,0.9)',
     fontSize:"18px"
     }}>
       <a className="navbar-brand font-weight-bold text-dark" >FTV Salon Academy</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
       aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
       </button>
     <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
        <li className="nav-item active" key ="1">
         <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
         </li>
       
        
         {
           !islogged && (
             <>
             <Link to="/signup">
            <li className="nav-item" key ="3">
            <a className="nav-link" >Singup</a>
           </li>
           </Link>

           <Link to="/signin">
           <li className="nav-item" key ="4">
            <a className="nav-link " >Signin</a>
           </li>
           </Link>

           </>
           )
         }
         {
           islogged && (
           <Link to="/">
            <li className="nav-item" onClick={signout} key ="5">
              <a className="nav-link" >Signout</a>
           </li>
           </Link>
           )
         }
        
      </ul>
     </div>
    </nav>
    </div>
        
    )

};
export default Header;