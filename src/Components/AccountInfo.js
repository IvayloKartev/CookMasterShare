import '../App.css';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import Header from './Header';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AccountInfo({name, email, password}){
    password = "*********";
    return (
        <section id="accountinfo">
            <h1 className="text-white">Profile info</h1>
            <hr/>
            <label className="text-white"><h2>Name: <span className="badge badge bg-secondary">{name}</span></h2></label>
            <br/>
            <label className="text-white"><h2>Email: <span className="badge badge bg-secondary">{email}</span></h2></label>
            <br/>
            <label className="text-white"><h2>Password: <span className="badge badge bg-secondary">{password}</span></h2></label>
        </section>
    )
}