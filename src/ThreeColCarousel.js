import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap"
import RestaurantCard from "./RestaurantCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ThreeColCarousel = ({ restaurants }) => {

    return (
        <Container className="px-0">
            <RenderSliderRestaurantsCardDeck restaurants={restaurants} />
        </Container>
    )
}

const RenderSliderRestaurantsCardDeck = ({ restaurants }) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    var numOfvisibleSlides;
    var step;

    if (width < 768) {
        numOfvisibleSlides = 1;
        step = 1;
    } else if (width < 992) {
        numOfvisibleSlides = 2;
        step = 2;
    } else {
        numOfvisibleSlides = 3;
        step = 3;
    }

    return <SliderRestaurantsCardDeck restaurants={restaurants} numOfvisibleSlides={numOfvisibleSlides} step={step} />

}

const SliderRestaurantsCardDeck = ({ restaurants, numOfvisibleSlides, step }) => {
    const totalSlides = countNumOfFreeDeleiveryRestaurants(restaurants);

    return (
        <CarouselProvider
            visibleSlides={numOfvisibleSlides}
            totalSlides={totalSlides}
            step={step}
            naturalSlideWidth={400}
            naturalSlideHeight={400}
        >
            <div className="d-flex justify-content-end pr-3">
                <ButtonBack className="border-0 bg-white pb-0"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" /></ButtonBack>
                <ButtonNext className="border-0 bg-white pb-0 pr-0"><FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" /></ButtonNext>
            </div>
            <Slider>
                {restaurants.map((restaurant, index) => {
                    return (
                        <Slide>
                            <RestaurantCard index={index} restaurant={restaurant} />
                        </Slide>
                    )
                })}
            </Slider>
        </CarouselProvider>
    )
}

const countNumOfFreeDeleiveryRestaurants = (arr) => {
    var count = 0;
    arr.forEach(location => {
        if (location.freeDelivery) {
            count++;
        }
    })

    return count;
}

export default ThreeColCarousel;