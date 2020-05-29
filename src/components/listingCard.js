import React ,{useState,useEffect}from 'react';
import Firebase from '../firebase.js';
import { ListingFetch } from '../firebaseHelpers/listing.js';
import { Switch, Route, useParams } from 'react-router-dom';


const ListingCard = (props)=>{
   
   
    const [info,setInfo] = useState([]);
    useEffect(()=>{
        ListingFetch("hair")
        .then(data=>setInfo(data))
        .catch(err=>console.log(err));

    },[]);
    return (
        <div className="row">
            {
                info.map((val,ind)=>{
                return (
                    <div className="card text-center" style={{width:"18rem",minWidth:"18rem",heigth:"24rem"}}>
                        <img src={val.imgUrl} className="card-img-top bg-dark"/>
                        <div className="card-body">
                          <h5 className="cardtitle">{val.title}</h5>
                          <p className="card-text">
                              {val.description}
                          </p>
                          <a href={val.url} target="_blank" className="btn btn-primary">Visit website</a>
                        </div>
                    </div>
                )
                })
            }
            
        </div>
    )
};
export default ListingCard;