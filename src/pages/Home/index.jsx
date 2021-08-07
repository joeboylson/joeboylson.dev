import React from "react"
import IndexGreeting from "../../layouts/IndexGreeting";
import ProjectsList from "../../layouts/ProjectsList";
import SocialGrid from "../../layouts/SocialGrid";

import './style.scss'

const IndexPage = () => (
  <div id="index-page">

    <div>
      <svg viewBox="0 0 70 17" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="13">Hi, I'm Joe</text>
      </svg>

      <SocialGrid/>
      <ProjectsList/>
    </div>

    <IndexGreeting/>
  </div>
);

export default IndexPage
