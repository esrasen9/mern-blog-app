import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useStateValue} from "../../Context";
import "./UpdatePostModal.css";
import {MdOutlinePublishedWithChanges} from "react-icons/md";
import axios from "axios";
import {useLocation,} from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
    height: "700px",
    bgcolor: 'white',
    border: '0',
    boxShadow: 24,
    p: 4,
};

const UpdatePostModal = ({post}) => {
    const {updateModalOpen, setUpdateModalOpen} = useStateValue();
    const {title, description} = post;
    const [currentTitle, setCurrentTitle] = useState(title);
    const [currentDescription, setCurrentDescription] = useState(description);
    const location = useLocation();

    const path = location.pathname;
    const handleUpdatePost = (e) => {
        e.preventDefault();
        if(!currentTitle){
            setCurrentTitle(title);
        }
        if(!currentDescription){
            setCurrentDescription(description);
        }
        axios.put(path,{title: currentTitle, description: currentDescription})
            .then(()=>setUpdateModalOpen(false))
            .then(() =>window.location.reload(0))
            .catch((err) => console.log(err));
    }
    return (
        <Modal
            open={updateModalOpen}
            onClose={()=>setUpdateModalOpen(false)}
        >
            <Box sx={style}>
                <form onSubmit={handleUpdatePost} className="update-post-form">
                    <h1 className="update-form-title">Post Settings</h1>
                    <input placeholder="Enter title here..."
                           value={currentTitle} type="text"
                           onChange={(e)=>setCurrentTitle(e.target.value)}
                           className="update-post-title"/>
                    <textarea value={currentDescription}
                              className="update-post-textarea"
                              placeholder="Write something here..."
                              onChange={(e)=>setCurrentDescription(e.target.value)}
                    />
                    <button className="update-post-button" type="submit">
                        Update <MdOutlinePublishedWithChanges size={35}/>
                    </button>
                </form>
            </Box>
        </Modal>
    );
}

export default UpdatePostModal;