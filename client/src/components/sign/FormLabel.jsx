import React from 'react';

const FormLabel = ({type,name,Icon,setMethod}) => {
    return (
        <div className="form-label">
            <Icon size={30}/>
            <input className="form-input"
                   type={type}
                   name={name}
                   placeholder={name}
                   onChange={(e)=>setMethod(e.target.value)}
            />
        </div>
    );
}

export default FormLabel;