import React from 'react';
import {BsPencilSquare} from "react-icons/bs";
import {MdDeleteOutline} from "react-icons/md";

const PostControlButtons = () => {
    return (
        <div className="post-control-buttons">
            <button className="post-control-button">
                <BsPencilSquare size={40}/>
            </button>
            <button className="post-control-button">
                <MdDeleteOutline size={44}/>
            </button>
        </div>
    );
}

export default PostControlButtons;