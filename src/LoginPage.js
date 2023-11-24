import './App.css';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import LoginBox from './Components/LoginBox';

export default function LoginPage({user, signInWithGoogle, email, password, signInWithEmail, showLogin, signInWithFacebook, createAccount, altName}){
    return (
        <div className='login-wrapper'>
            <LoginBox googleSignIn={signInWithGoogle} email={email} password={password} emailSignIn={signInWithEmail} showLogin={showLogin} facebookSignIn={signInWithFacebook} createAccount={createAccount}/>
        </div>
    );
}