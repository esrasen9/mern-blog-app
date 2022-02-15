import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {BsFillCaretRightFill} from "react-icons/bs";
import FormLabel from "./FormLabel";
import {HiLockClosed, HiUserCircle} from "react-icons/hi";
import {MdEmail} from "react-icons/md";
import {useStateValue} from "../../Context";
import axios from "axios";
import {AiOutlineWarning} from "react-icons/ai";

const SignUp = () => {
    const {setUser} = useStateValue();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        setError(false);
        axios.post("/auth/signup", {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        })
            .then((res) => setUser(res.data))
            .then(() => navigate("/settings"))
            .catch(() => setError(true));
    }
    return (
        <form className="login-form" onSubmit={handleSignUp}>
            <FormLabel type={"text"} name={"username"} Icon={HiUserCircle}/>
            <FormLabel type={"email"} name={"email"} Icon={MdEmail}/>
            <FormLabel type={"password"} name={"password"} Icon={HiLockClosed}/>
            {error && <p className="error-message">Something went wrong! <AiOutlineWarning className="warn-icon"/></p>}
            <button type="submit" className="sign-button">Sign Up <BsFillCaretRightFill className={"warn-icon"} size={25}/></button>
        </form>
    );
}

export default SignUp;