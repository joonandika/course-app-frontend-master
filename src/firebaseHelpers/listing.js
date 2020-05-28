import Firebase from '../firebase';
import React from 'react';
import { database } from 'firebase';

export const ListingFetch = async(collection)=>{
   
        const snapshot = await Firebase.firestore().collection(collection).get();
        return snapshot.docs.map(doc => doc.data());
 
}