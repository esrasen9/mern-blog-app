import React from 'react';
import signImg from "../../img/pexels-photo-4065864.jpeg";
import SignHeader from "./SignHeader";
import SignForm from "./SignForm";
import "./Sign.css";

const SignContainer = () => {
    return (
        <div className="sign-form-container">
            <img className="sign-form-img" src={signImg} alt=""/>
            <div className="sign-form-right">
                <SignHeader/>
                <SignForm/>
            </div>
        </div>
    );
}

export default SignContainer;