import React from 'react';
import {BsPencilSquare} from "react-icons/bs";
import UpdatePostModal from "../update-post-modal/UpdatePostModal";
import {useStateValue} from "../../Context";
const UpdatePostButton = ({post}) => {
    const {setUpdateModalOpen} = useStateValue();
    return (
        <>
            <UpdatePostModal post={post}/>
            <button onClick={()=>setUpdateModalOpen(true)} className="post-control-button">
                <BsPencilSquare size={40}/>
            </button>
        </>
    );
}

export default UpdatePostButton;