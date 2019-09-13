import React from 'react';
import "./styles.css";

const Input = ({ label, type, name, id, status, handleOnChange }) => {
    return (
            <input label={label} type={type} name={name} id={id} status={status} onChange={handleOnChange}/>
    )
}

export default Input;