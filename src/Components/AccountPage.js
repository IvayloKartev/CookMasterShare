import '../App.css';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import Header from './Header';
import {useEffect, useState} from 'react';
import SidePanel from './SidePanel';
import AccountInfo from './AccountInfo';

export default function AccountPage({type, name, email, password}){
    return (
        <>
            <Header loginBtn={type}/>
            <main className="profile-content">
                <SidePanel name={name}/>
                <AccountInfo name={name} email={email}/>
            </main>
        </>
    )
}