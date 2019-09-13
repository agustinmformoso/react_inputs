import React from 'react';
import "./styles.css";

const Textarea = ({ name, rows, cols, label }) => {
    return (
        <div>
            <label className="label">{label}</label>
            <textarea name={name} rows={rows} cols={cols} />
        </div>
    )
}

export default Textarea;
