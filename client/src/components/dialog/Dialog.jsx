import React from 'react';
import "./Dialog.css";
import {useStateValue} from "../../Context";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

const Dialog = () => {
    const navigate = useNavigate();
    const {setDialogIsOpen} = useStateValue();
    const location = useLocation();
    const path = location.pathname;
    //posts/:id

    const handleDeletePost = () => {
        axios.delete(path)
            .then(()=>setDialogIsOpen(false))
            .then(()=>navigate("/myposts"))
            .catch((err) => console.error(err));
    }

    return (
        <div className="dialog-container">
            <div className="dialog-box">
                <h3>Are you sure?</h3>
                <div className="dialog-buttons">
                    <button onClick={handleDeletePost} className="btn btn-yes">Yes</button>
                    <button onClick={()=>setDialogIsOpen(false)} className="btn btn-no">No</button>
                </div>
            </div>
        </div>
    );
}

export default Dialog;