import React from 'react';
import "./styles.css";
import Button from 'react-bootstrap/Button';

const ButtonCustom = ({ btn_config }) => {
    return (
        <Button variant={btn_config.variant} size={btn_config.size} >{btn_config.description}</Button>
    )
}

export default ButtonCustom;
