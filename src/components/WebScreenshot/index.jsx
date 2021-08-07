import React from "react";
import Image from 'gatsby-image';

import './style.scss';

const WebScreenshot = ({fluid}) => {

  const style = {
    width: fluid.aspectRatio < 1 ? `calc( 50vh * ${fluid.aspectRatio} )` : 'auto'
  }

  const CircleSVG = ({fill = '#DDD'}) => (
    <svg width='16' height='16'>
      <circle cx='8' cy='8' r='8' fill={fill} />
    </svg>
  ) 

  return (
    <div className="web-screenshot">

        <div className="psuedo-browser" style={style}>
          <div className="psuedo-browser-header">
            <CircleSVG/>
            <CircleSVG/>
            <CircleSVG/>
          </div>
          <Image fluid={fluid}/>
        </div>

    </div>
  )
};

export default WebScreenshot;