import React, {useEffect} from 'react';
import {CgProfile} from "react-icons/cg";
import {FaUserMinus} from "react-icons/fa";
import "./ProfilePicInput.css";
import {useStateValue} from "../../../Context";
import avatarPp from "../../../img/pngtree-vector-avatar-icon-png-image_313572.jpeg";

const ProfilePicInput = () => {
    const {profilePic, setProfilePic, user} = useStateValue();
    useEffect(() =>{
        setProfilePic(user.profilePicture)
    },[setProfilePic, user]);

    return (
        <div className="pp-settings">
            <img src={profilePic || avatarPp} className="pp-image" alt=""/>
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