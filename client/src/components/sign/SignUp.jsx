import React from 'react';
import {FaUser} from "react-icons/fa";
import {BsFillCaretRightFill} from "react-icons/bs";
import FormLabel from "./FormLabel";
import {HiLockClosed} from "react-icons/hi";
import {MdEmail} from "react-icons/md";

const SignUp = () => {
    return (
        <>
            <FormLabel type={"text"} name={"username"} Icon={FaUser}/>
            <FormLabel type={"email"} name={"email"} Icon={MdEmail}/>
            <FormLabel type={"password"} name={"password"} Icon={HiLockClosed}/>
            <button className="sign-button">Sign Up <BsFillCaretRightFill size={25}/></button>
        </>
    );
}

export default SignUp;