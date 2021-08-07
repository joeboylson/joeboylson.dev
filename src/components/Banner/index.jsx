import React from 'react';
import "./style.scss";

const Banner = ({text = null, reverse = false}) => {
  
  const bannerText = new Array(100).fill(text).join("  ")

  return (
    <div className={`banner ${reverse ? 'reverse' : ''}`} >
      <h1>{bannerText}</h1>
    </div>  
  );
};

export default Banner;
