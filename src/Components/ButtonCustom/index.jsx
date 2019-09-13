import React from 'react';
import "./styles.css";
import Button from 'react-bootstrap/Button';

const ButtonCustom = ({ description, variant, size }) => {
    return (
        <Button variant={variant} size={size} >{description}</Button>
    )
}

export default ButtonCustom;
