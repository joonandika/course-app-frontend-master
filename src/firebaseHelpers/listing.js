import Firebase from '../firebase';

export const ListingFetch = async(collection)=>{
   
        const snapshot = await Firebase.firestore().collection(collection).get();
        return snapshot.docs.map(doc => doc.data());
 
};

export const selectListFetch = async (selectCourse)=>{
        var db = Firebase.firestore();
       const snap = await db.collection("All")
        .where("courses",'array-contains',selectCourse)
        .get();
        return snap.docs.map(doc => doc.data());
};