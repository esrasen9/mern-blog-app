import React from 'react';

function SettingInput({ inputName, type }) {
  return (
    <div className="setting-input-container">
      <label className="setting-label" htmlFor={inputName}>{inputName}</label>
      <input
        className="setting-input"
        id={inputName}
        name={inputName}
        type={type}
      />
    </div>
  );
}

export default SettingInput;
