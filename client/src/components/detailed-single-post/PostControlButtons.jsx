import React from 'react';
import {BsPencilSquare} from "react-icons/bs";
import {MdDeleteOutline} from "react-icons/md";
import Dialog from "../dialog/Dialog";
import {useStateValue} from "../../Context";

const PostControlButtons = ({id}) => {
    const {dialogIsOpen, setDialogIsOpen} = useStateValue();
    return (
        <div className="post-control-buttons">
            <button className="post-control-button">
                <BsPencilSquare size={40}/>
            </button>
            {dialogIsOpen && <Dialog />}
            <button onClick={()=>setDialogIsOpen(true)} className="post-control-button">
                <MdDeleteOutline size={44}/>
            </button>
        </div>
    );
}

export default PostControlButtons;