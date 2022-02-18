import React, { useState } from 'react';
import axios from 'axios';
import ProfilePicInput from './pp-input/ProfilePicInput';
import SettingInput from './SettingInput';
import { useStateValue } from '../../Context';

function SettingsForm() {
  const { user, setUser, createUpdatedUser } = useStateValue();
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const updatedUser = createUpdatedUser(e, file);
    axios.put(`/users/${user._id}`, updatedUser)
      .then((res) => setUser(res.data))
      .then(() => {
        setSuccess(true);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <form onSubmit={handleUpdateProfile} className="settings-form">
      <div className="settings-form-left">
        <ProfilePicInput file={file} setFile={setFile} />
      </div>
      <div className="settings-form-right">
        <h1>Profile Settings</h1>
        <div className="setting-inputs">
          <SettingInput inputName="username" type="text" />
          <SettingInput inputName="email" type="email" />
          <SettingInput inputName="password" type="password" />
        </div>
        {success && <div className="update-message success">Profile updated successfully!</div>}
        {error && <div className="update-message error">Something went wrong please try again...</div>}
        <button type="submit" className="update-button">Update Profile</button>
      </div>
    </form>
  );
}

export default SettingsForm;
