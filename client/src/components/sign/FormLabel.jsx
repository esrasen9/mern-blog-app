import React from 'react';

function FormLabel({ type, name, Icon }) {
  return (
    <div className="form-label">
      <Icon size={30} />
      <input
        className="form-input"
        type={type}
        name={name}
        placeholder={name}
      />
    </div>
  );
}

export default FormLabel;
