import React from 'react';

import './Input.css';

const Input = ({ placeholder = '', ...props }) => {
    return (
        <input className="form-control" placeholder={placeholder} {...props} />
    )
}

export default Input