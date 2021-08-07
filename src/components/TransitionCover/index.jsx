import React ,{ useEffect, useState, useRef } from 'react';
import Banner from '../Banner';
import "./style.scss";

const TransitionCover = ({text = null}) => {

  const [content, setContent] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    if (!content) {
      setContent(text);
      setTimeout(() => setContent(null), 1600)
    } 
  }, [text]);

  if (!content) return <div/>

  return (
    <div ref={ref} id="transition-cover" onTransitionEndCapture={() => console.log('end')}>
      { Array(15).fill(0).map( (_, i) => {
        return (
          <Banner 
            text={content} 
            key={i} 
            reverse={ (i % 2) === 0 }
          />
        );
      })}
    </div>
  );
};

export default TransitionCover;
