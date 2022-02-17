import React from 'react';
import "./Right.css";
import Icons from "./Icons";
import {Link} from "react-router-dom";
import {useStateValue} from "../../../Context";
import defaultPp from "../../../img/avatar.png";

const Right = () => {
    const {user} = useStateValue();
    const imgSrc = `http://localhost:5001/${user?.profilePicture}`

    return (
        <div className="top-right">
            {
                user && (
                    <Link to={"/myposts"}>
                        <img
                            className="profile-pic"
                            src={user.profilePicture ? imgSrc : defaultPp}
                            alt="avatar"/>
                    </Link>
                )
            }
            <Icons/>
        </div>
    );
}

export default Right;