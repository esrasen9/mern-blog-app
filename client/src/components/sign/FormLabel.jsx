import React from 'react';

const FormLabel = ({type,name,Icon}) => {
    return (
        <div className="form-label">
            <Icon size={25}/>
            <input className="form-input"
                   type={type}
                   placeholder={name}
            />
        </div>
    );
}

export default FormLabel;