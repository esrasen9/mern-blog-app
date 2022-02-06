import React from 'react';
import "./Left.css";
import logo from "../../../img/blogicon.png";

const Left = () => {
    return (
        <div className="left">
            <img className="left-img" src={logo} alt=""/>
        </div>
    );
}

export default Left;