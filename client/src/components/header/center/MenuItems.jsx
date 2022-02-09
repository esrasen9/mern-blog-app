import React from 'react';
import {NavLink} from "react-router-dom";
import "./MenuItems.css";

const MenuItems = () => {
    return (
        <div className="menu-items">
            <NavLink exact activeClassName="active" className="menu-item" to={"/"}>Home</NavLink>
            <NavLink activeClassName="active" className="menu-item" to={"/write"}>Write</NavLink>
            <NavLink activeClassName="active" className="menu-item" to={"/about"}>About</NavLink>
        </div>
    );
}

export default MenuItems;