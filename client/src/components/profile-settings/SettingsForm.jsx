import React from 'react';
import ProfilePicInput from "./pp-input/ProfilePicInput";
import SettingInput from "./SettingInput";

const SettingsForm = () => {
    return (
        <form className="settings-form">
            <div className="settings-form-left">
                <ProfilePicInput/>
            </div>
            <div className="settings-form-right">
                <h1>Profile Settings</h1>
                <div className="setting-inputs">
                    <SettingInput inputName="username" type="text" />
                    <SettingInput inputName="email" type="email" />
                    <SettingInput inputName="password" type="password" />
                </div>
                <button className="update-button">Update Profile</button>
            </div>
        </form>
    );
}

export default SettingsForm;