import React from 'react';
import "./Settings.css";
import SettingsForm from "./SettingsForm";
import {FaUserMinus} from "react-icons/fa";
import DeleteAccountModal from "../delete-account-modal/DeleteAccountModal";
import {useStateValue} from "../../Context";

const Settings = () => {
    const {setDeleteModalOpen} = useStateValue();
    return (
        <div className="settings-container">
            <button onClick={()=>setDeleteModalOpen(true)} className="delete-account-button">Delete Account <FaUserMinus className="delete-account-icon" size={30}/></button>
            <DeleteAccountModal/>
            <SettingsForm/>
        </div>
    );
}

export default Settings;