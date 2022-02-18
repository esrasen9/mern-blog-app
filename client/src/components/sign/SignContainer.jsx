import React, { useState } from 'react';
import signImg from '../../img/pexels-photo-4065864.jpeg';
import './Sign.css';
import SignFormRight from './SignFormRight';

function SignContainer() {
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <div className="sign-form-container">
      <div className="sign-form-left">
        <img className="sign-form-img" src={signImg} alt="" />
      </div>
      <SignFormRight isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
    </div>
  );
}

export default SignContainer;
