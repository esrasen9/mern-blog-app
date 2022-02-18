import React from 'react';
import './Settings.css';
import { FaUserMinus } from 'react-icons/fa';
import SettingsForm from './SettingsForm';
import DeleteAccountModal from '../delete-account-modal/DeleteAccountModal';
import { useStateValue } from '../../Context';

function Settings() {
  const { setDeleteModalOpen } = useStateValue();
  return (
    <div className="settings-container">
      <button
        className="delete-account-button"
        onClick={() => setDeleteModalOpen(true)}
        type="button"
      >
        Delete Account
        <FaUserMinus className="delete-account-icon" size={30} />
      </button>
      <DeleteAccountModal />
      <SettingsForm />
    </div>
  );
}

export default Settings;
