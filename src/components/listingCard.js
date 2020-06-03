import React ,{useState,useEffect}from 'react';
import Firebase from '../firebase.js';
import { ListingFetch,selectListFetch } from '../firebaseHelpers/listing.js';
import { Switch, Route, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import '../styles/listingCard.css'

const ListingCard = (props)=>{
    const [info,setInfo] = useState([]);
    const [loading,setLoad] = useState(true);

    useEffect(()=>{
        if(props.name !="All"){
            selectListFetch(props.name)
            .then(data=>{
                setInfo(data);
                console.log(data);
                setLoad(false);
            })
            .catch(err=>console.log(err));
        }
        else {
            ListingFetch("All")
            .then(data=>{
                setInfo(data);
                setLoad(false);
            })
            .catch(err=>console.log(err));
        }
    },[]);

    const displayDesc = (s)=>{
       var sarr = s.split(" ");
       if(sarr.length >25){
           s = s.substring(0,125);
            s+="....";
           return s;
       }else return s;
    }

    
    return (
        <>
        {loading && (
            <Skeleton count={4} height="90px"/>
        )}
       
            {  info && (
                info.map((val,ind)=>{
                return (
                    <div className="column">
                        <div className="card  text-center" id="listingCard" style={{width:"18rem",minWidth:"18rem",heigth:"24rem"}}>
                        <img src={val.imgUrl} className="card-img-top bg-dark"/>
                        <div className="card-body" style={{padding:"2px 16px"}}>
                          <h5 className="cardtitle">{val.title}</h5>
                          <p className="card-text">
                              {displayDesc(val.description)}
                          </p>
                          <a href={val.url} target="_blank" className="btn btn-primary">Visit website</a>
                        </div>
                    </div>
                    </div>
                   
                )
                })
                )
            }
            
    
        </>
    )
};
export default ListingCard;