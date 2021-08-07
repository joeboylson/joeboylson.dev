import React from "react"
import PortableText from "../../components/PortableText";

const ShortProject = ({is, name, synopsis}) => (
    <div>
        <h3>{name}</h3>
        
        { synopsis && 
            <PortableText blocks={synopsis}/>
        }
    </div>
);

export default ShortProject;
