import React from 'react';
import "./Right.css";
import Icons from "./Icons";
import {Link} from "react-router-dom";
import {useStateValue} from "../../../Context";

const Right = () => {
    const {user} = useStateValue();
    return (
        <div className="top-right">
            {
                user && (
                    <Link to={"/myposts"}>
                        <img
                            className="profile-pic"
                            src="https://images.pexels.com/photos/10718776/pexels-photo-10718776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="avatar"/>
                    </Link>
                )
            }
            <Icons/>
        </div>
    );
}

export default Right;