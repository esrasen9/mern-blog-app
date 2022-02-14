import React, {useEffect} from 'react';
import "./Right.css";
import Icons from "./Icons";
import {Link} from "react-router-dom";
import {useStateValue} from "../../../Context";
import defaultPp from "../../../img/avatar.png";
const Right = () => {
    const {profilePic,setProfilePic, user} = useStateValue();

    useEffect(() =>{
        setProfilePic(user?.profilePicture)
    },[setProfilePic,user]);

    return (
        <div className="top-right">
            {
                user && (
                    <Link to={"/myposts"}>
                        <img
                            className="profile-pic"
                            src={profilePic || defaultPp}
                            alt="avatar"/>
                    </Link>
                )
            }
            <Icons/>
        </div>
    );
}

export default Right;