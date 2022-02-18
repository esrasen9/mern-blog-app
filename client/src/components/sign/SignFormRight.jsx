import React from 'react';
import SignHeader from './SignHeader';
import SignUp from './SignUp';
import SignIn from './SignIn';

function SignFormRight({ isSignUp, setIsSignUp }) {
  return (
    <div className="sign-form-right">
      <SignHeader isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
      {
        isSignUp ? <SignUp /> : <SignIn />
      }
    </div>
  );
}

export default SignFormRight;
