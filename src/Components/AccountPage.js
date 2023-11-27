import '../App.css';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import Header from './Header';
import {useEffect, useState} from 'react';
import SidePanel from './SidePanel';
import AccountInfo from './AccountInfo';
import Favourites from './Favourites';
import NewRecipe from './AddNewRecipe';
import MyRecipes from './MyRecipes';

export default function AccountPage({type, name, email, password, signOut, unshowAccount, addToDB, isAccount}){
    return (
        <>
            <Header loginBtn={type} isLogin={isAccount}/>
            <main className="profile-content">
                <SidePanel name={name}/>
                <section className='accountinfo'>
                    <AccountInfo name={name} email={email} signOut={signOut} unshowAccount={unshowAccount}/>
                    <Favourites cards={null}/>
                    <MyRecipes cards={null}/>
                    <NewRecipe addToDB={addToDB}/>                   
                </section>
            </main>
        </>
    )
}