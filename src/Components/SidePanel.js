import '../App.css';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import Header from './Header';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SidePanel({name}){
    return(
        <aside className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
            <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-4">{name}</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <a href="#accountinfo" className="nav-link bg-warning text-black">Profile Info</a>
            </li>
            <li>
                <a href="#" className="nav-link text-white sideoptions">Favourites</a>
            </li>
            <li>
                <a href="#" className="nav-link text-white sideoptions">My recipes</a>
            </li>
            <li>
                <a href="#" className="nav-link text-white sideoptions">Create recipes</a>
            </li>
            <li>
                <a href="#" className="nav-link text-white sideoptions">Challenges</a>
            </li>
            </ul>
            <hr/>
        </aside>
    )
}