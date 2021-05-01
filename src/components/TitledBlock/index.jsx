import React from 'react';

import './style.scss'

const TitledBlock = ({title, children}) => {
    return (
        <div className="titled-block">
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default TitledBlock;