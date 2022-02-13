import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {BsFillCaretRightFill} from "react-icons/bs";
import FormLabel from "./FormLabel";
import {HiLockClosed, HiUserCircle} from "react-icons/hi";
import {MdEmail} from "react-icons/md";
import {useStateValue} from "../../Context";
import axios from "axios";

const SignUp = () => {
    const {username,setUsername,setUser,email,setEmail,password,setPassword} = useStateValue();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        setError(false);
        axios.post("/auth/signup",{
            username,
            email,
            password
        })
        .then((res) => setUser(res.data))
        .then(() => navigate("/myposts"))
        .catch(() => setError(true));
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