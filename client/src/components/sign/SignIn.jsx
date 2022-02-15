import React, {useState} from 'react';
import {BsFillCaretRightFill} from "react-icons/bs";
import FormLabel from "./FormLabel";
import {HiLockClosed, HiUserCircle} from "react-icons/hi";
import {useStateValue} from "../../Context";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {AiOutlineWarning} from "react-icons/ai";

const SignIn = () => {
    const {setUser} = useStateValue();
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const handleSignIn = (e) => {
        e.preventDefault();
        axios.post("/auth/signin", {
            username: e.target.username.value,
            password: e.target.password.value
        })
            .then((res) => setUser(res.data))
            .then(() => navigate("/settings"))
            .catch(() => setError(true))
    }

    return (
        <form className="login-form" onSubmit={(e) => handleSignIn(e)}>
            <FormLabel type={"text"} name={"username"} Icon={HiUserCircle}/>
            <FormLabel type={"password"} name={"password"} Icon={HiLockClosed}/>
            {error && <p className="error-message">Something went wrong! <AiOutlineWarning className={"warn-icon"}/></p>}
            <button type="submit" className="sign-button">Login Now <BsFillCaretRightFill size={25}/></button>
        </form>
    );
}

export default SignIn;