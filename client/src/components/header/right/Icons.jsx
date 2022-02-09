import React from 'react';
import {BiLogIn, BiLogOut, BiSearch} from "react-icons/bi";
import {Link} from "react-router-dom";
const Icons = () => {
    return (
        <div className="icons">
            <button className="search-button">
                <BiSearch size={50}/>
            </button>
            {/*
            <button className="icon-button">
                <BiLogOut size={34}/>
            <*/}
            <Link className="sign-link" to="/sign">
                <BiLogIn size={50}/>
            </Link>
        </div>
    );
}

export default Icons;