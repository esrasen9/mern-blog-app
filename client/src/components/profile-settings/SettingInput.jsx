import React from 'react';

const SettingInput = ({inputName, type}) => {
    return (
        <div className="setting-input-container">
            <label className="setting-label" htmlFor={inputName}>{inputName}</label>
            <input className="setting-input"
                   id={inputName}
                   type={type}/>
        </div>
    );
}

export default SettingInput;