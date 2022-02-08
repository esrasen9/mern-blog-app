import React from 'react';

const SignHeader = () => {
    return (
        <div className="sign-form-header">
            <div>
                <button className="sign-header-button">Sign In</button>
                {/*<p className="point">&#9650;</p>*/}
            </div>
            <div>
                <button className="sign-header-button">Sign Up</button>
                <p className="point">&#9650;</p>
            </div>
        </div>
    );
}

export default SignHeader;