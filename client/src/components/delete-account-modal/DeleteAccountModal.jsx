import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useStateValue} from "../../Context";
import "./DeleteAccountModal.css";
import axios from "axios";
import {BiTrash} from "react-icons/bi";
import {useNavigate} from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "30vw",
    height: "500px",
    bgcolor: 'white',
    border: '0',
    boxShadow: 24,
    padding: "10px 20px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
};

const DeleteAccountModal = () => {
    const {user, setUser, deleteModalOpen, setDeleteModalOpen} = useStateValue();
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const handleChange = (e) => {
        (e.target.value === user.username)
            ? setDisabled(false)
            : setDisabled(true);
    }
    const handleDeleteAccount = (e) => {
        e.preventDefault();
        axios.delete(`/users/${user._id}`)
            .then(() => setUser(null))
            .then(() => navigate("/"))
            .catch((err) => console.error(err));
    }
    return (
        <Modal
            open={deleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
        >
            <Box sx={style}>
                <div className="delete-warn-message">
                    <h1>Are you sure?</h1>
                    <h4>
                        This action cannot be undone.
                        This will permanently delete the {user?.username} account.
                    </h4>
                </div>
                <div className="delete-action">
                    <div className="confirm-box">
                        <label htmlFor="confirmUsername">Please type {user?.username} to confirm.</label>
                        <input autoFocus name="confirmUsername" id="confirmUsername" onChange={handleChange}
                               type="text" id="confirmUsername" className="confirm-input"/>
                    </div>
                    <button onClick={handleDeleteAccount} className={`${disabled ? "disabled-button" : ""} delete-button`} type="submit">
                        Delete <BiTrash size={25}/>
                    </button>
                </div>
            </Box>
        </Modal>
    );
}

export default DeleteAccountModal;