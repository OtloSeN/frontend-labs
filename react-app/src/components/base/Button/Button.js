import React from 'react';

import './style.css';

const Button = ({ text, color, ...props }) => {
    return (
        <button
            className={
                `btn btn-${color}`
            }
            {...props}
        >{text}</button>
    )
}

export default Button