import React from 'react';
import {BsFillCaretRightFill} from "react-icons/bs";
import FormLabel from "./FormLabel";
import {HiLockClosed, HiUserCircle} from "react-icons/hi";
import {MdEmail} from "react-icons/md";

const SignUp = () => {
    return (
        <>
            <FormLabel type={"text"} name={"username"} Icon={HiUserCircle}/>
            <FormLabel type={"email"} name={"email"} Icon={MdEmail}/>
            <FormLabel type={"password"} name={"password"} Icon={HiLockClosed}/>
            <button className="sign-button">Sign Up <BsFillCaretRightFill size={25}/></button>
        </>
    );
}

export default SignUp;