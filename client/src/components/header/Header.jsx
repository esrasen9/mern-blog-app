import React from 'react';
import "./Header.css";
import Left from "./left/Left";
import MenuItems from "./center/MenuItems";
import Right from "./right/Right";

const Header = () => {
    return (
        <div className="header">
            <Left/>
            <MenuItems/>
            <Right/>
        </div>
    );
}

export default Header;