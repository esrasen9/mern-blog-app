import React from 'react';
import {BiLogIn, BiLogOut, BiSearch} from "react-icons/bi";
import {Link} from "react-router-dom";
import {useStateValue} from "../../../Context";
const Icons = () => {
    const {user,setUser} = useStateValue();
    return (
        <div className="icons">
            <button className="search-button">
                <BiSearch size={50}/>
            </button>
            {
                user ? (<button onClick={()=>setUser(null)} className="icon-button sign-link "><BiLogOut size={50}/></button>)
                    : (<Link className="sign-link" to="/sign"><BiLogIn size={50}/></Link>)
            }
        </div>
    );
}

export default Icons;