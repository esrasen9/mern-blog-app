import React from 'react';
import {BsFillCaretRightFill} from "react-icons/bs";
import FormLabel from "./FormLabel";
import {HiLockClosed, HiUserCircle} from "react-icons/hi";
import {useStateValue} from "../../Context";

const SignIn = () => {
    const {setUsername, setPassword} = useStateValue();
    return (
        <form className="login-form">
            <FormLabel setMethod={setUsername} type={"text"} name={"username"} Icon={HiUserCircle}/>
            <FormLabel setMethod={setPassword} type={"password"} name={"password"} Icon={HiLockClosed}/>
            <button className="sign-button">Login Now <BsFillCaretRightFill size={25}/></button>
        </form>
    );
}

export default SignIn;