import React from 'react';
import {CgProfile} from "react-icons/cg";
import "./ProfilePicInput.css";
import {useStateValue} from "../../../Context";
import avatar from "../../../img/avatar.png";

const ProfilePicInput = ({file, setFile}) => {
    const {user} = useStateValue();
    const imgSrc = `http://localhost:5001/${user?.profilePicture}`

    return (
        <div className="pp-settings">
            {
                file ? (<img src={URL.createObjectURL(file)} className="pp-image" alt=""/>)
                    : (<img src={user?.profilePicture ? imgSrc : avatar} className="pp-image" alt=""/>)
            }
            <div className="pp-setting-buttons">
                <label className="pp-label" htmlFor="ppInput">
                    Change Picture
                    <CgProfile className="pp-input-icon" size={30}/>
                </label>
                <input name="ppInput" onChange={(e) => setFile(e.target.files[0])} type="file" id="ppInput"
                       className="pp-input"/>
            </div>
        </div>
    );
}

export default ProfilePicInput;