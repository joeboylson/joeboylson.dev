import { Link } from "gatsby"
import React, { Fragment } from "react"
import Banner from "../../components/Banner";

import FlexTitle from '../../components/FlexTitle';
import TransitionLink from "../../components/TransitionLink";

import './style.scss';

const GridItems = ({count}) => {
  const _array = new Array(count).fill(0);

  return (
    <Fragment>
      { _array.map( (_, i) => <span className="grid-unit"/> ) }
    </Fragment>
  )
}

const IndexPage = () => {

  return (
    <div id="page-index">

      <span id="logo"/>

      <div id="page-index-grid">

        <GridItems count={144}/>

        <div id="greeting">
          <h1>Hi, I'm Joe</h1>
        </div>

        <div id="social">
          <p>LI</p>
          <p>GH</p>
          <p>IG</p>
        </div>

        <div id="bio">
          <p>A <b>web developer</b> and <b>photographer</b> based in Cincinnati, OH.</p>
          <p>Always striving for <b>meaning in design</b>, and <b>reusability in code</b></p>
          <TransitionLink value={'Projects'}>Projects</TransitionLink>
        </div>

      </div>

      <div id="page-index-footer">
        <p className="small">Portfolio 2021</p>
        <p className="small"> &copy; Joe Boylson 2021</p>
        <p className="small" id="dimension">C-137</p>
      </div>

      {/* 

      <div>
        <div className="column-gap24">
          <p>I'm happy to see you and very grateful for your visit.</p>
          <p>I am a <b>Full Stack Web Developer</b>, <b>Photographer</b>, 
          and <b>Student</b> at the University of Cincinnati.</p>
        </div>
      </div>

      <div style={{width: `50%`}}>
        <h3>For Recruiters</h3>
        <h3>For Contractors</h3>
        <h3>For Developers</h3>
        <h3>For Photographers</h3>
      </div>
      
      <div style={{width: `50%`}}>
        <h3>About Me</h3>
        <h3>Projects</h3>
        <h3>Gallery</h3>
        <h3>For Photographers</h3>
      </div> */}

    </div>
  )
}

export default IndexPage
