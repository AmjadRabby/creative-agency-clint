import React, { useContext } from "react";
import "./Login.css";
import logo from "../../images/logos/logo.png";
import google from "../../images/logos/gLogo.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [googleSignIn, setGoogleSignIn] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation()

  let { from } = location.state || { from: { pathname: "/" } };

  const SignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {   

      const {displayName, email, photoURL} = result.user;

      console.log(result)

      const signInUser = {name: displayName, email, image: photoURL};
      userToken()
      setGoogleSignIn(signInUser);
      history.replace(from);
      
    }).catch(function(error) {     
      console.log(error.message); 
    
    });

  };


  const userToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
     sessionStorage.setItem('token', idToken);
    }).catch(function(error) {
      // Handle error
    });
  }

  return (
    <div className="login-area">
      <Link to="/">
        {" "}
        <img style={{}} src={logo} alt="" />
      </Link>
      <div className="login-box">
        <h2>Login with</h2>
     
          <div style={{cursor:'pointer'}} onClick={SignIn} className=' login-btn d-flex google-flex'>
                    <img className='m-1' style={{width:'30px',height:'30px'}} src={google} alt=""/>
                    <p className='ml-5 m-1'>Continue with Google</p>
          </div>
        Don't have an account? <a href="#">Create an account</a>
      </div>
      
    </div>
  );
};

export default Login;
