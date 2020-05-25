import React,{useState} from 'react';
import Base from './base';
import {Link,Redirect} from 'react-router-dom';
import Firebase from "../firebase";
import * as firebase from'firebase';
const Signin = ()=>{
    const [values,setValues] = useState({
        email:"",
        password:"",
        error:"",
        success:false,
        loading:false,
        didRedirect:false
    });
const {email,password,error,loading,success} = values;

const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };


  const onsubmit = event =>{
      event.preventDefault();
      setValues({...values,error:false,loading:true});
      const auth = Firebase.auth();
      const promise= auth.signInWithEmailAndPassword(email,password);
       promise.then((user)=>{
          console.log(user);
          setValues({...values,error:false,success:true});
          
      })
    .catch(err=>{console.log(err)
        setValues({...values,error:err.message,success:false});
              
    });   
  };


  const onsubmitforGoogle = (e)=>{
    e.preventDefault();
    setValues({...values,error:false,loading:true});
    var provider = new firebase.auth.GoogleAuthProvider();
    Firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      console.log(token);
      setValues({...values,error:false,success:true});
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      setValues({...values,error:error.message,success:false});

      // ...
    });
  
  
  };

   const performRedirect=()=>{
    if(success){
        return <Redirect to ="/"/>
    } 
   };
  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const loadingMessage = () => {
      return (
          loading && (
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-info"
                style={{ display: loading ? "" : "none" }}
              >
                 loading...
              </div>
            </div>
          </div>
          )
      )
  };


    const singInFrom = ()=>{
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form >
                       
                       <div className="form-group">
                           <label  className="text-dark">Email</label>
                            <input onChange={handleChange("email")} className="form-control" value={email} type="email"/>
                       </div>
                       <div className="form-group">
                           <label  className="text-dark">password</label>
                            <input onChange={handleChange("password")} className="form-control" value={password} type="password"/>
                       </div>
                       <button onClick={onsubmit} className="btn btn-success btn-block">
                           Submit
                       </button>
                       <div className="col-xs-12"><hr/></div>
                       <button onClick={onsubmitforGoogle} className="btn btn-success btn-block">
                           Signin with Google
                       </button>
                       <button onClick={onsubmitforGoogle} className="btn btn-success btn-block">
                           Signin with Facebook
                       </button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <Base >
            <h3 className="text-center">
              Signin
            </h3>
            {loadingMessage()}
            {errorMessage()}
            {singInFrom()}
            {performRedirect()}
            
            
        </Base>
    );
}
export default Signin;