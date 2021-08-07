import { Link } from "gatsby";
import React from "react";

import './style.scss';

const Nav = () => {

  return (
    <div id="nav">

      <Link id="index-link" to="/"><h3>joeboylson.dev</h3></Link>

      <div id="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
    </div>
    )
};

export default Nav;