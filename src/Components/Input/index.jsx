import React from 'react';
import "./styles.css";

const Input = ({ label, type, name }) => {
    return (
        <div className="inputcomponent">
            <label className="label">{label}</label>
            <input type={type} name={name}  />
        </div>
    )
}

export default Input;

/*id, status, handleOnChange 
id={id} status={status} onChange={handleOnChange}*/
