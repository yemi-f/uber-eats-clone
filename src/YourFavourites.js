import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import ThreeColCarousel from "./ThreeColCarousel";

const YourFavourites = ({ restaurants }) => {

    const heading =
        <h1>Your Favourites</h1>;

    var isFavouriteArray = [];

    restaurants.forEach(restaurant => {
        if (restaurant.isCustomerFavourite === true) {
            isFavouriteArray.push(restaurant)
        }
    })

    return (
        <ThreeColCarousel restaurants={isFavouriteArray} heading={heading} />
    )
}

export default YourFavourites;