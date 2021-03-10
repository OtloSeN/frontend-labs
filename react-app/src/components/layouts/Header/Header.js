import React from 'react';
import { NavLink } from 'react-router-dom'

import './Header.css';

import Button   from '../../base/Button'
import Input    from '../../base/Input'
import Selector from '../../base/Selector'

function Header(props) {
    return (
        <div className="Header">
            <nav>
                <NavLink className="Header-links" to="/">Home</NavLink>
                <NavLink className="Header-links" to="/create-movie">Add movie</NavLink>
            </nav>
            <div className="Header-filters">
                <Selector
                    options={[
                        { text: 'A-Z', value: 'ASC' },
                        { text: 'Z-A', value: 'DESC' },
                        { text: 'Newest', value: 'Newest' }
                    ]}
                    defaultOption={
                        { disabled: true, hidden: true, text: 'Sort by' }
                    }
                />
                <Button text="Sort" color="outline-success"/>
                <Input placeholder="Title or Actor"/>
                <Button text="Sort" color="outline-success"/>
            </div>
        </div>
    );
}

export default Header;