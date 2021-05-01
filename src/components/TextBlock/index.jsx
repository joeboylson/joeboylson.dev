import React from 'react';
import PortableText from '../PortableText';

const TextBlock = ({title, blocks}) => {
    return (
        <div className="text-block">
            <h3>{title}</h3>
            <PortableText blocks={blocks}/>
        </div>
    )
}

export default TextBlock;