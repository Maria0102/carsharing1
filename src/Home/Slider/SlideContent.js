import React, {useContext} from "react";
import {SlideContext} from "./SlideContext";
import Button from "../../components/Button";
import "./styles.scss";

const SlideContent = () => {
    const {currentSlide, CurrentSlideStyleButton} = useContext(SlideContext);

    return (
        <div className="slideContent">
            <h3 className="slideName">{currentSlide.name}</h3>
            <span className="slideText">{currentSlide.text}</span>
            <Button className="slideButton" background={CurrentSlideStyleButton} value="Подробнее" pathname="/"/>
        </div>
    );
}
export default SlideContent;