import React from 'react';
import {NavLink} from "react-router-dom";
import "./MenuItems.css";
import CategoryDropDown from "./CategoryDropDown";
import {useStateValue} from "../../../Context";

const MenuItems = () => {
    const {user} = useStateValue();
    return (
        <div className="menu-items">
            <NavLink exact="true" className={(link)=>link.isActive ? "active menu-item" : "menu-item"} to={"/"}>Home</NavLink>
            <NavLink className={(link)=>link.isActive ? "active menu-item" : "menu-item"} to={"/write"}>Write</NavLink>
            <CategoryDropDown/>
            <NavLink className={(link)=>link.isActive ? "active menu-item" : "menu-item"} to={"/about"}>About</NavLink>
            {user &&<NavLink className={(link)=>link.isActive ? "active menu-item" : "menu-item"} to={"/myposts"}>My Posts</NavLink>}
        </div>
    );
}

export default MenuItems;