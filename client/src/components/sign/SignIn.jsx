import React, {useState} from 'react';
import {BsFillCaretRightFill} from "react-icons/bs";
import FormLabel from "./FormLabel";
import {HiLockClosed, HiUserCircle} from "react-icons/hi";
import {useStateValue} from "../../Context";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const SignIn = () => {
    const {username,setUsername, password,setPassword,setUser} = useStateValue();
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const handleSignIn = (e) => {
        e.preventDefault();
        setError(false);
        axios.post("/auth/signin",{
            username,
            password
        })
            .then((res) => setUser(res.data))
            .then(()=> navigate("/myposts"))
            .catch(() => setError(true))
    }

    return (
        <form className="login-form" onSubmit={handleSignIn}>
            <FormLabel setMethod={setUsername} type={"text"} name={"username"} Icon={HiUserCircle}/>
            <FormLabel setMethod={setPassword} type={"password"} name={"password"} Icon={HiLockClosed}/>
            <button className="sign-button">Login Now <BsFillCaretRightFill size={25}/></button>
        </form>
    );
}

export default SignIn;