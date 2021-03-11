import React from 'react';

import './Card.css';

const Card = ({ title, text, logo, alt = 'Image', linkText, linkUrl, ...props }) => {
    return (
        <div className="Card">
            <img className="card-img-top" src={`${process.env.PUBLIC_URL}${logo}`} alt={alt}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>{text}</p>
                <div className="text">
                    <a href={linkUrl}>{linkText}</a>
                </div>
            </div>
        </div>
    )
}

export default Card