import React from 'react';
import SignHeader from "./SignHeader";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const SignFormRight = ({isSignUp, setIsSignUp}) => {
    return (
        <div className="sign-form-right">
            <SignHeader isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>
            <form className="login-form">
                {
                    isSignUp ?  <SignUp/> : <SignIn/>
                }
            </form>
        </div>
    );
}

export default SignFormRight;