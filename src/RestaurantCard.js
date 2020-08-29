import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMenuUrl, getPriceRange, getHeartIcon } from "./HelperFunctions";

const RestaurantCard = ({ restaurant }) => {
    const bullet = "\u2022";

    const getDeliveryFeeSpan = (freeDelivery, deliveryTime) => {
        var spanEnding = `Delivery Fee ${bullet} ${deliveryTime}-${deliveryTime + 10} Min ${bullet} `
        if (freeDelivery === true) {
            return (
                <><span className="text-muted" style={{ textDecoration: "line-through" }}>${restaurant.deliveryFee}</span><span> $0 {spanEnding}</span></>
            )
        }
        return (
            <span>${restaurant.deliveryFee.toFixed(2)} {spanEnding}</span>
        )
    }

    return (
        <Col className="mt-4">
            <Link to={`/${getMenuUrl(restaurant.restaurantName)}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Card className="restaurant-card-horizontal border-0" style={{ cursor: "pointer" }}>
                    <Card.Img variant="top" src={restaurant.restaurantImage} height="175" />
                    <Card.ImgOverlay className="d-flex justify-content-end" style={{ marginTop: "124px" }}>
                        {getHeartIcon(restaurant.isCustomerFavourite)}
                    </Card.ImgOverlay>
                    <Card.Body className="pl-0">
                        <Card.Title>{restaurant.restaurantName}</Card.Title>
                        <Card.Text style={{ fontSize: "14px" }}>
                            <span>{getDeliveryFeeSpan(restaurant.freeDelivery, restaurant.deliveryTime)}</span>
                            <span>{getPriceRange(restaurant.meal)}</span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-white pl-0">
                        <small className="text-muted">{restaurant.restaurantSpecialty.split(",").join(bullet)}</small>
                    </Card.Footer>
                </Card>
            </Link>
        </Col>
    )
}


export default RestaurantCard;

