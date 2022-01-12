import React, { useMemo } from "react"
import Image from 'gatsby-image';
import styled from "styled-components";

const ImageBoxContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid black;
    padding: 24px;
    gap: 24px;

    &.skewright {
        grid-template-columns: 3fr 1fr;
    }

    &.skewleft {
        grid-template-columns: 1fr 3fr;
    }
`;

const ImageBoxImage = styled.img`
    width: 100%;
`;

const ImageBox = ({ 
  children,
  imageSrc=null,
  fluid=null,
  reverse=false, 
  skewRight=false, 
  skewLeft=false, 
}) => {

  const className = useMemo(() => {
    if (skewRight && skewLeft) {
      return console.warn("CANNOT USE SKEWRIGHT AND SKEWLEFT AT THE SAME TIME")
    }

    if (skewRight) return "skewright";
    if (skewLeft) return "skewleft";
  }, [skewRight, skewLeft]);

  const ImageComponent = useMemo(() => {
    if (imageSrc) {
      return () => <ImageBoxImage src={imageSrc} />
    } else if (fluid) {
      return () => <Image fluid={fluid}/>
    } else {
      return () => <span/>
    }
  }, [fluid, imageSrc])

  return (
    <ImageBoxContainer className={className}>
        { !reverse && <ImageComponent/> }
        {children}
        { reverse && <ImageComponent/> }      
    </ImageBoxContainer>
  )
}

export default ImageBox
