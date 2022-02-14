import React from 'react';
import loginImage from "../../img/undraw_login_re_4vu2 (1).svg"
import "./NewPost.css";
import {Link} from "react-router-dom";

const SignInvitation = () => {
    return (
        <div className={"sign-inv-container"}>
            <img className="login-image" src={loginImage} alt=""/>
            <p className="inv-message">To share a post on this blog page, you must first login or register.</p>
            <Link to="/sign" className="inv-link">Login Now!</Link>
        </div>
    );
}

export default SignInvitation;