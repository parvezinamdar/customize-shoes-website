import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';
import { animateScroll as scroll } from 'react-scroll';
import { useWindowScroll } from 'react-use';

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if(pageYOffset > 300){
            setVisiblity(true);
        }else{
            setVisiblity(false);
        }
    }, [pageYOffset]);

    if(!visible){
        return false;
    }

    return(
        <div className="back-to-top" 
            onClick={() => scroll.scrollToTop()}>
            <i className="icofont-simple-up"></i>
        </div>
    );
}    


export default ScrollToTop;