import {useRef, useEffect} from "react";
import LocomotiveScroll from "locomotive-scroll";
import { useLocation } from '@reach/router';

export const useScroll = ()=>{

    const smooth = true;
    const location = useLocation()
    const scrollRef = useRef(null);

    useEffect(()=>{
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth,
            smartphone:{ smooth },
            tablet: {smooth},
            multiplier: 0.3
        })

        console.log({scroll})

        // return scroll && scroll.destroy();
    }, [location]);

    return scrollRef;
};