import React from 'react';
import "./Right.css";

import Icons from "./Icons";
const Right = () => {
    return (
        <div className="top-right">
            <img
                className="profile-pic"
                src="https://images.pexels.com/photos/10718776/pexels-photo-10718776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar"/>
            <Icons/>
        </div>
    );
}

export default Right;