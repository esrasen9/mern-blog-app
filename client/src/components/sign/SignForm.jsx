import React from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const SignForm = () => {
    return (
        <form className="login-form">
            {/*<SignIn/>*/}
            <SignUp/>
        </form>
    );
}

export default SignForm;