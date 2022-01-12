import React, { useMemo } from "react"
import Image from 'gatsby-image';
import { ImageBoxContainer, ImageBoxImage } from "./StyledContainer"

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
