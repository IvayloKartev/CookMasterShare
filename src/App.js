import './App.css';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import Home from './Components/Home';
import LoginPage from './LoginPage';
import {useEffect, useState} from 'react';
import AccountPage from './Components/AccountPage';

const firebaseConfig = {
  apiKey: "AIzaSyD99Ps3ewiDL7WTtaCJaDqBmo5dmSRjuCo",
  authDomain: "cook-mastershare.firebaseapp.com",
  projectId: "cook-mastershare",
  storageBucket: "cook-mastershare.appspot.com",
  messagingSenderId: "901848339378",
  appId: "1:901848339378:web:ea76b02d8ef1cff6670aab",
  measurementId: "G-11NKHJEW95"
};

let app = initializeApp(firebaseConfig);
let auth = getAuth(app);

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [user] = useAuthState(auth);
  const [altName, setAltName] = useState('');
  const [showAccount, setShowAccount] = useState(false);

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
    return <AccountPage type={user.displayName ? user.displayName : nameFromEmail(user.email)} name={user.displayName ? user.displayName : nameFromEmail(user.email)} email={user.email}/>
  }
  return (
    <>
      {user ? <Home type={user.displayName ? user.displayName : nameFromEmail(user.email)} btnEvent={changeShowAccount}/> : <Home type="Login" btnEvent={() => setShowLogin(true)}/>}
    </>
  )
}

export default App;
