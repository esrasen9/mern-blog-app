import React from 'react';

const SignHeader = ({isSignUp, setIsSignUp}) => {

    const handleClick = () => {
        setIsSignUp(!isSignUp);
    }

    return (
        <div className="sign-form-header">
            <div>
                <button onClick={handleClick}
                        className="sign-header-button">Sign In
                </button>
                {!isSignUp && <p className="point">&#9650;</p>}
            </div>
            <div>
                <button onClick={handleClick}
                        className="sign-header-button">Sign Up
                </button>
                {isSignUp && <p className="point">&#9650;</p>}
            </div>
        </div>
    );
}

export default SignHeader;