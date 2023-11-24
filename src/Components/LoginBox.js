import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import LoginBtn from "./LoginBtn";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginBox({googleSignIn, emailSignIn, email, password, showLogin, facebookSignIn, createAccount, altName}){
    const [isSignUp, setIsSignUp] = useState(false);
    function changeSignUp(){
        setIsSignUp(!isSignUp);
        console.log(isSignUp)
    }
    if(isSignUp){
        return(
            <>
                <section className="login-box">
                    <h1>Login to your profile</h1>
                    <form className="form flex-column g-3 forms">
                        <label>Name: <input className="form-control" type="text" id="name"/></label>
                        <label>Email: <input className="form-control" type="email" id="email"/></label>
                        <label>Password: <input className="form-control" type="password" id="pass"/></label>
                        <LoginBtn type="Email" email={createAccount} showLogin={showLogin}/>
                    </form>
                    <LoginBtn type="Google" googleSignIn={googleSignIn} showLogin={showLogin}/>
                    <LoginBtn type="Facebook" facebookSignIn={facebookSignIn} googleSignIn={googleSignIn} showLogin={showLogin}/>
                </section>
            </>
        )
    }
    return(
        <>
            <section className="login-box">
                <h1>Login to your profile</h1>
                <form className="form flex-column g-3 forms">
                    <label>Email: <input className="form-control" type="email" id="email"/></label>
                    <label>Password: <input className="form-control" type="password" id="pass"/></label>
                    <LoginBtn type="Email" email={email} showLogin={showLogin}/>
                </form>
                <LoginBtn type="Google" googleSignIn={googleSignIn} showLogin={showLogin}/>
                <LoginBtn type="Facebook" facebookSignIn={facebookSignIn} googleSignIn={googleSignIn} showLogin={showLogin}/>
                <LoginBtn type="SignUp" isSignUp={changeSignUp}/>
            </section>
        </>
    )
}