import React,{useState} from 'react';
import Firebase from '../firebase';
import Base from './base';
import firebase from 'firebase';
const Addlist = ()=>{
 const [data,setData] = useState({
     title:"",
     Address:"",
     imgUrl:"",
     url:"",
     email:"",
     phone:"",
     courses:[""],
     description:"",
     location:""
 });
 const [s,setS] = useState(false);
 const [stringCourse,setCourse] = useState("");

 const {courses,title} = data;
 const submit = ()=>{
     const arr = stringCourse.split(",");
     arr.forEach(a => setData({...data,courses:courses.push(a)}));
     console.log(arr);
     
     console.log(data);
     Firebase.firestore().collection("All").doc(title).set(data)
     .then((s)=>setS(true))
     .catch(err=>setS(false));
     setData({
        title:"",
        Address:"",
        imgUrl:"",
        url:"",
        email:"",
        phone:"",
        courses:[""],
        description:"",
        location:""
     });
     setS(false);
 };
 const {Address,imgUrl,url,email,phone,description,location} = data;
 const successMsg = ()=>{
     if(s) return <h1>Data saved</h1>;
     else return <h1>data is not saved yet</h1>

 }
 const handlechange= name=>event=>{
   if(name!="courses") setData({...data,[name]:event.target.value});
   else setCourse(event.target.value);   
}    
 return (
     <>
     <Base>
      {successMsg()}
      <input placeholder="title" value={title} onChange={handlechange("title")} type="text" />
      <input placeholder="email" value={email} onChange={handlechange("email")} type="email" />
      <input placeholder="phone" value={phone} onChange={handlechange("phone")} type="text" />

      <input placeholder="Address"  value={Address} type="text" onChange={handlechange("Address")}  />
      <input placeholder="imgUrl" value={imgUrl} type="text" onChange={handlechange("imgUrl")} />
      <input placeholder="url" value={url}  type="text" onChange={handlechange("url")} />
      <input placeholder="description" value={description} type="text" onChange={handlechange("description")} />
      <input placeholder="loaction" value={location} type="text" onChange={handlechange("location")} />
      <input placeholder="courses" type="text" onChange={handlechange("courses")} />
       <button onClick={submit}>
           submit
       </button>
      <p>{JSON.stringify(data)}</p>
      </Base>
     </>
 )

};
export default Addlist;