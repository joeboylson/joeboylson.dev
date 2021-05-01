import React, { useRef } from "react"
import { useWheel } from 'react-use-gesture';
import { Lethargy } from 'lethargy'
import './style.scss'

const lethargy = new Lethargy()
const PageWrapper = ({children}) => {

    const pageWrapperRef = useRef()
    const pageWrapperInnerRef = useRef()

    const handleWheel = (data) => {

        const {movement, velocity, event} = data

        const wrapper = pageWrapperRef.current;
        const wrapperInner = pageWrapperInnerRef.current;

        const {
            bottom: innerBottom, 
            height: innerHeight
        } = pageWrapperInnerRef.current.getBoundingClientRect()
        
        const scrollDirection = movement[1] < 0 ? 1 : -1;
        const currentY = Number(wrapper.dataset.transformy) || 0;
        const speed = 1;
        const innerHeightDifference = innerHeight - window.innerHeight;

        let scrollAmount = currentY + ((velocity * speed) * scrollDirection);

        // removes interial scrolling
        /*
            From Docs:
            lethargy.check(e) will return:
                "1" if it is a normal scroll up event
                -1 if it is a normal scroll down event
                false if it is initiated by inertial scrolling.
        */
        if ( ![-1, 1].includes(lethargy.check(event)) ) return console.log('inertial');

        // inner page element is not scrollable (i.e. shorter than page height)
        if (innerHeightDifference < 0) return;

        // inner page element has reached top
        if ( currentY >= 0 && scrollDirection > 0) scrollAmount = 0;

        // inner page element has reached the bottom
        if ( 
            scrollDirection < 0 && (
                innerBottom <= window.innerHeight ||
                currentY < (innerHeightDifference * -1)
            )
        ) {
            scrollAmount = innerHeightDifference * -1;
        }

        wrapperInner.style.transform = `translateY(${scrollAmount}px)`
        wrapper.setAttribute('data-transformy', scrollAmount);
    }

    useWheel(
        handleWheel,
        { domTarget: pageWrapperRef, eventOptions: { passive: false } }
    )

    return (
        <div 
            id="pagewrapper" 
            ref={pageWrapperRef} 
            data-transformy={0}
        >
            <div
                id="pagewrapper-inner"  
                ref={pageWrapperInnerRef} 
            >
                <p>this is the page wrapper</p>
                {children}
            </div>
        </div>
    )
}

export default PageWrapper;