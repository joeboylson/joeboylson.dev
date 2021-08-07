import React from 'react';
import { usePageTransitionContext } from "../../context/PageTransition";

import { navigate } from "gatsby"

const TransitionLink = ({ children, value }) => {

  const { setTransitonText } = usePageTransitionContext();

  const handleClick = () => {
    setTransitonText(value)
    setTimeout(() => navigate("/project/palabras-de-espanol/"), 800);
  }

  return <button onClick={handleClick}>{children}</button>

}

export default TransitionLink;
