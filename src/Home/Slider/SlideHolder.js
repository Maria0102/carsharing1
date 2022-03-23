import React, {useContext} from "react";
import {SlideContext} from "./SlideContext";
import "./styles.scss";

import SlideContent from "./SlideContent";
import Arrow from "./Arrow/index";
import SlideDots from "./SlideDots";

const SlideHolder = () => {
    const {currentSlideStyle, next, previous} = useContext(SlideContext);

    return (
        <div style={currentSlideStyle} className="slideHolder">
            <div className="slide">
                <Arrow direction="left" handleClick={previous}/>
                <SlideContent />
                <SlideDots />
                <Arrow direction="right" handleClick={next} />
            </div>
        </div>
    );
}
export default SlideHolder;