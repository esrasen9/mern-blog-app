import React from 'react';
import {BsFillCaretRightFill} from "react-icons/bs";
import FormLabel from "./FormLabel";
import {MdEmail} from "react-icons/md";
import {HiLockClosed} from "react-icons/hi";

const SignIn = () => {
    return (
        <>
            <FormLabel type={"email"} name={"email"} Icon={MdEmail}/>
            <FormLabel type={"password"} name={"password"} Icon={HiLockClosed}/>
            <button className="sign-button">Login Now <BsFillCaretRightFill size={25}/></button>
        </>
    );
}

export default SignIn;