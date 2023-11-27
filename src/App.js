import './App.css';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import Home from './Components/Home';
import LoginPage from './LoginPage';
import {useEffect, useState} from 'react';
import AccountPage from './Components/AccountPage';
import { getFirestore, orderBy } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import {getStorage, ref, uploadBytes} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyD99Ps3ewiDL7WTtaCJaDqBmo5dmSRjuCo",
  authDomain: "cook-mastershare.firebaseapp.com",
  projectId: "cook-mastershare",
  storageBucket: "cook-mastershare.appspot.com",
  messagingSenderId: "901848339378",
  appId: "1:901848339378:web:ea76b02d8ef1cff6670aab",
  measurementId: "G-11NKHJEW95"
};

export let app = initializeApp(firebaseConfig);
let auth = getAuth(app);
let db = getFirestore(app);
let recipes = await getDocs(collection(db, "recipes"));
export const storage = getStorage(app);

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [user] = useAuthState(auth);
  const [altName, setAltName] = useState('');
  const [showAccount, setShowAccount] = useState(false);
  let recipesToShow = [];

      recipes.forEach((doc) => {
      recipesToShow.push(doc.data());
      })
      recipesToShow.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))

  async function addToDataBase(tname, desc, tcontent, timage, tdate){
    try {
      const docRef = await addDoc(collection(db, "recipes"), {
        name: tname,
        description: desc,
        content: tcontent,
        image: timage,
        author: user.displayName ? user.displayName : nameFromEmail(user.email),
        likes: 0,
        date: tdate
      });
      console.log("Document written with ID: ", tname);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function changeShowAccount(){
    setShowAccount(!showAccount);
    console.log(showAccount);
  }

  function changeAltName(newName){
    setAltName(newName);
  }

  async function changeEmailAndPass(newemail, newpass){
    await signInWithEmailAndPassword(auth, newemail, newpass);
  }

  async function signInWithGoogle(){
    let provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }
  async function signInWithFacebook(){
    let provider = new FacebookAuthProvider();
    await signInWithPopup(auth, provider);
  }
  async function setShowLoginFalse(){
    await setShowLogin(false);
  }
 
  async function createAccount(thisemail, thispass) {
    createUserWithEmailAndPassword(auth, thisemail, thispass);
  }
  async function signInWithEmail(){
    signInWithEmailAndPassword(auth, "emailVar@abv.bg", "passwordVar");
  }
  function signOut(){
    auth.signOut();
  }
  function nameFromEmail(emailStr){
    let res = String('');
    let i=0;
    while(emailStr.charAt(i) !== "@"){
        res += emailStr.charAt(i);
        i++;
    }
    return res;
  }
  if(showLogin){
    return <LoginPage altName={changeAltName} signInWithGoogle={signInWithGoogle} email={changeEmailAndPass} signInWithEmail={signInWithEmail} showLogin={setShowLoginFalse} signInWithFacebook={signInWithFacebook} createAccount={createAccount}/>
  }
  if(showAccount) {
    return <AccountPage type={user.displayName ? user.displayName : nameFromEmail(user.email)} name={user.displayName ? user.displayName : nameFromEmail(user.email)} email={user.email} signOut={signOut} unshowAccount={changeShowAccount} addToDB={addToDataBase} isAccount={changeShowAccount}/>
  }
  return (
    <>
      {user ? <Home type={user.displayName ? user.displayName : nameFromEmail(user.email)} btnEvent={changeShowAccount} recipes={recipesToShow}/> : <Home type="Login" btnEvent={() => setShowLogin(true)} recipes={recipesToShow}/>}
    </>
  )
}

export default App;
