import React ,{useState,useEffect}from 'react';
import Firebase from '../firebase.js';
import { ListingFetch } from '../firebaseHelpers/listing.js';

const ListingCard = ()=>{
    useEffect(()=>{
        ListingFetch("hair")
        .then(data=>console.log(data))
        .catch(err=>console.log(err));

    });
    return (
        <div className="row">

        </div>
    )
};
export default ListingCard;