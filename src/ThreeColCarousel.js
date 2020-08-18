import React, { useState } from "react";
import { Button, Container } from "react-bootstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestaurantCard from "./RestaurantCard";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ThreeColCarousel = ({ restaurants }) => {

    const slider = React.createRef();
    const [presentSlide, setPresentSlide] = useState(0)


    const [sliderSettings, setSliderSettings] = useState({
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        afterChange: (currentSlide) => { setPresentSlide(3 + currentSlide) },
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    swipeToSlide: true,
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                }
            },
        ]
    })

    const goToPreviousSlide = () => {
        slider.current.slickPrev();
    }

    const goToNextSlide = () => {
        slider.current.slickNext();
        // console.log("present slide " + presentSlide)
    }

    return (
        <Container className="px-0">
            <PreviousNextBtn goToPreviousSlide={goToPreviousSlide} goToNextSlide={goToNextSlide}
                sliderSettings={sliderSettings} presentSlide={presentSlide} />
            <SliderRestaurantsCardDeck slider={slider} sliderSettings={sliderSettings} restaurants={restaurants} />
        </Container>
    )
}

const SliderRestaurantsCardDeck = ({ slider, sliderSettings, restaurants }) => {
    return (
        <Slider ref={slider} {...sliderSettings} >
            {restaurants.map(restaurant => {
                return <RestaurantCard restaurant={restaurant} />
            })}
        </Slider>
    )
}

const PreviousNextBtn = ({ presentSlide, sliderSettings, goToPreviousSlide, goToNextSlide }) => {

    const btnDisabledColour = "#F6F6F6";
    const btnEnabledColour = "#F0F0F0";
    const btnTxtDisabledColour = "#AFAFAF";
    const btnTxtEnabledColour = "#000000";

    const prevBtnStyle = {
        //slidesToShow = 3
        backgroundColor: presentSlide > sliderSettings.slidesToShow ? btnEnabledColour : btnDisabledColour,
        color: presentSlide > sliderSettings.slidesToShow ? btnTxtEnabledColour : btnTxtDisabledColour,
    }

    const nextBtnStyle = {
        // total number of slides = 7
        backgroundColor: presentSlide < 7 ? btnEnabledColour : btnDisabledColour,
        color: presentSlide < 7 ? btnTxtEnabledColour : btnTxtDisabledColour,
    }
    return (
        <div className="d-flex justify-content-end pr-3">
            <Button className="btn btn-secondary btn-lg border-0 ml-2 my-2 rounded-circle" onClick={() => goToPreviousSlide()} style={prevBtnStyle}>
                <FontAwesomeIcon icon={faArrowLeft} />

            </Button>
            <Button className="btn btn-secondary btn-lg border-0 ml-2 my-2  rounded-circle" onClick={() => goToNextSlide()} style={nextBtnStyle}>
                <FontAwesomeIcon icon={faArrowRight} />

            </Button>
        </div>
    )
}


export default ThreeColCarousel;