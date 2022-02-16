import React from 'react';
import Dialog from "../dialog/Dialog";
import {useStateValue} from "../../Context";
import {MdDeleteOutline} from "react-icons/md";

const DeletePostButton = () =>  {
    const {dialogIsOpen,setDialogIsOpen} = useStateValue();
    return (
        <>
            {dialogIsOpen && <Dialog />}
            <button onClick={()=>setDialogIsOpen(true)} className="post-control-button">
                <MdDeleteOutline size={44}/>
            </button>
        </>
    );
}

export default DeletePostButton;