import React from "react"
import Nav from "../Nav"
import './style.scss'

const PageWrapper = ({children}) => (
  <div id="page-wrapper">
    {children}
  </div>
);

export default PageWrapper;