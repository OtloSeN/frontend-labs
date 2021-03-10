import React from 'react';

import './Selector.css';

function Selector({ options = [], defaultOption, ...props }) {
    const htmlOptions = options.map((option, i) => {
        return (
            <option key={i} value={option.value}>{option.text}</option>
        );
    });

    if(defaultOption) {
        htmlOptions.unshift(
            <option
                key={Number.MAX_SAFE_INTEGER}
                hidden={defaultOption.hidden ? 'hidden' : null}
                disabled={defaultOption.disabled ? 'disabled' : null}
            >
                {defaultOption.text}
            </option>
        )
    }

    return (
        <select
            className="form-control"
            defaultValue={defaultOption ? defaultOption.text : null}
            {...props}
        >
            {htmlOptions}
        </select>
    );
}

export default Selector;