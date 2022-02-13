import React, {useState} from 'react';
import {BsFillCaretRightFill} from "react-icons/bs";
import FormLabel from "./FormLabel";
import {HiLockClosed, HiUserCircle} from "react-icons/hi";
import {MdEmail} from "react-icons/md";
import {useStateValue} from "../../Context";
import axios from "axios";

const SignUp = () => {
    const {username,setUsername,setUser,email,setEmail,password,setPassword} = useStateValue();
    const [error, setError] = useState(false);
    const handleSignUp = (e) => {
        e.preventDefault();
        axios.post("/auth/signup",{
            username,
            email,
            password
        })
        .then((res) => setUser(res.data))
        .catch((err) => setError(err));
    }
    return (
        <form className="login-form" onSubmit={handleSignUp}>
            <FormLabel type={"text"} setMethod={setUsername} name={"username"} Icon={HiUserCircle}/>
            <FormLabel type={"email"} setMethod={setEmail} name={"email"} Icon={MdEmail}/>
            <FormLabel type={"password"} setMethod={setPassword} name={"password"} Icon={HiLockClosed}/>
            {error && <p className="error-message">Something went wrong!</p>}
            <button className="sign-button">Sign Up <BsFillCaretRightFill size={25}/></button>
        </form>
    );
}

export default SignUp;