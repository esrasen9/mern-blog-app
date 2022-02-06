import React from 'react';
import "./Left.css";
import logo from "../../../img/blogicon.png";
import {Link} from "react-router-dom";

const Left = () => {
    return (
        <Link to="/" className="left">
            <img className="left-img" src={logo} alt=""/>
        </Link>
    );
}

export default Left;