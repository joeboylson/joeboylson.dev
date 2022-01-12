import React from "react";
import { isEmpty } from "lodash";

const BodyCopy = ({ children, sections }) => {

  if ( !isEmpty(sections) ) {
    const sectionText = sections.join("<br/><br/>")
    return <p className="js-body-copy" dangerouslySetInnerHTML={{__html: sectionText}}></p>;
  }

  return (
    <p className="js-body-copy">
      { children }
    </p>
  )
}

export default BodyCopy
