import React from 'react';
import {BiLogIn, BiLogOut, BiSearch} from "react-icons/bi";
import {Link, useNavigate} from "react-router-dom";
import {useStateValue} from "../../../Context";
import {FiSettings} from "react-icons/fi";

const Icons = () => {
    const {user, setUser, setProfilePic} = useStateValue();
    const navigate = useNavigate();
    const handleLogout =( ) => {
        setUser(null);
        setProfilePic(null);
        navigate("/");
    }
    return (
        <div className="icons">
            <button className="search-button">
                <BiSearch size={50}/>
            </button>
            {
                user ? (
                        <>
                            <Link to="/settings">
                                <button className="icon-button"><FiSettings size={40}/></button>
                            </Link>
                            <button onClick={handleLogout} className="icon-button "><BiLogOut color={"crimson"}
                                                                                                     size={50}/></button>
                        </>
                    )
                    : (<Link className="link" to="/sign"><BiLogIn size={50}/></Link>)
            }
        </div>
    );
}

export default Icons;