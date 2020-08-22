import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import zeroFee from "./images/zeroFee.svg"
import ThreeColCarousel from "./ThreeColCarousel";
import Countdown, { zeroPad } from 'react-countdown';

const ZeroDollarDeliveryFee = ({ restaurants }) => {
    const pillBtnStyle = {
        backgroundColor: "#F0F0F0",
        borderWidth: "0",
        color: "#000000",
        borderRadius: "16px",
        padding: "8px 16px",
    }

    const heading =
        <Row className="mt-5">
            <Col xs={2}>
                <img src={zeroFee} alt="$0 delivery fee" />
            </Col>
            <Col>
                <h1>$0 Delivery Fee</h1>
                <p className="text-muted">Share a delivery partner with a nearby order</p>
            </Col>
        </Row>;

    const timeRemaining = <Button style={pillBtnStyle}>
        New options in <Countdown date={Date.now() + 500000} renderer={renderer} />
    </Button>
    var zeroDollarDeliveryFeeArray = [];

    restaurants.forEach(restaurant => {
        if (restaurant.freeDelivery === true) {
            zeroDollarDeliveryFeeArray.push(restaurant)
        }
    })

    return (
        <ThreeColCarousel restaurants={zeroDollarDeliveryFeeArray} heading={heading} timeRemaining={timeRemaining} />
    )
}

const renderer = ({ minutes, seconds }) => {
    return <span>{minutes}:{zeroPad(seconds)}</span>;
}

export default ZeroDollarDeliveryFee;