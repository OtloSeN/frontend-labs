import React       from 'react';
import { NavLink } from 'react-router-dom'

import './Card.css';

const Card = ({ title, text, logo, alt = 'Image', linkText, linkUrl, ...props }) => {
    return (
        <div className="Card">
            <img className="card-img-top" src={`${process.env.PUBLIC_URL}${logo}`} alt={alt}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>{text}</p>
                <div className="text">
                    <NavLink to={linkUrl}>{linkText}</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card