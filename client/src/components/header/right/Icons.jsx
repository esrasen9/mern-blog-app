import React from 'react';
import {BiLogIn, BiLogOut, BiSearch} from "react-icons/bi";

const Icons = () => {
    return (
        <div className="icons">
            <button className="icon-button">
                <BiSearch size={34}/>
            </button>
            <button className="icon-button">
                <BiLogOut size={34}/>
            </button>
            {/*<button className="icon-button">
                <BiLogin size={30}/>
            </button>
            */}
        </div>
    );
}

export default Icons;