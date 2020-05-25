import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAMConWSxiYS1yv1gLmJZYURLv9DDj7eD4",
    authDomain: "courseapp-76cf2.firebaseapp.com",
    databaseURL: "https://courseapp-76cf2.firebaseio.com",
    projectId: "courseapp-76cf2",
    storageBucket: "courseapp-76cf2.appspot.com",
    messagingSenderId: "165752678030",
    appId: "1:165752678030:web:8064021286220d25510bdf",
    measurementId: "G-0MPLYE3H4X"
};
const  Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;

export const isLoggedIn = ()=>{
    Firebase.auth().onAuthStateChanged(
        user=>{
            console.log(user);
            return true;
        }
    )
};

