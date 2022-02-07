import React from 'react';
import fakeImg from "../../../img/pexels-photo-5052851.jpeg";
import {CgProfile} from "react-icons/cg";
import {FaUserMinus} from "react-icons/fa";
import "./ProfilePicInput.css";

const ProfilePicInput = () => {
    return (
        <div className="pp-settings">
            <img src={fakeImg} className="pp-image" alt=""/>
            <div className="pp-setting-buttons">
                <label className="pp-label" htmlFor="pp-input">
                    Change Picture
                    <CgProfile className="pp-input-icon" size={30}/>
                </label>
                <input type="file" id="pp-input" className="pp-input"/>
                <button className="delete-account-button">Delete Account <FaUserMinus className="delete-account-icon"
                                                                                      size={30}/></button>
            </div>
        </div>
    );
}

export default ProfilePicInput;