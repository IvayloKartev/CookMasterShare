import '../App.css';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function LoginBtn({googleSignIn ,type, showLogin, email, facebookSignIn, isSignUp ,altName}){
    function emails(event){       
        const emVar = document.getElementById("email");
        const passVar = document.getElementById("pass");
        const nameVar = document.getElementById("name");
        console.log("Why?!+ "+emVar.value)
        let test = String(emVar.value);
        if(nameVar !== null) altName = nameVar.value;
        email(test, passVar.value);
        showLogin();
    }
    if(type === "Email"){
        return (
            <button className="btn btn-secondary" onClick={emails}>Sign In <i class="fa-solid fa-envelope"></i></button>
        )
    } else if(type === "Google") {
        return (
            <button className="btn btn-danger lbtn" onClick={() => {googleSignIn(); showLogin()}}>Sign in with Google <i class="fa-brands fa-google"></i></button>
        )
    } else if(type === "Facebook") {
        return (
            <button className="btn btn-primary lbtn" onClick={() => {facebookSignIn(); showLogin()}}>Sign in with Facebook <i class="fa-brands fa-facebook"></i></button>
        )
    } else if(type === "SignUp") {
        return (
            <button className="btn btn-secondary lbtn" onClick={() => {isSignUp();}}>Don't have an account? Sign Up <i class="icon-chevron-sign-up"></i></button>
        )
    }
}