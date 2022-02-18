import React from 'react';

function SignHeader({ isSignUp, setIsSignUp }) {
  const handleClick = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="sign-form-header">
      <div>
        <button
          className="sign-header-button"
          onClick={handleClick}
          type="button"
        >
          Sign In
        </button>
        {!isSignUp && <p className="point">&#9650;</p>}
      </div>
      <div>
        <button
          className="sign-header-button"
          onClick={handleClick}
          type="button"
        >
          Sign Up
        </button>
        {isSignUp && <p className="point">&#9650;</p>}
      </div>
    </div>
  );
}

export default SignHeader;
