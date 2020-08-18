import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import zeroFee from "./images/zeroFee.svg"
import ThreeColCarousel from "./ThreeColCarousel";

const ZeroDollarDeliveryFee = ({ restaurants }) => {
    const btnStyle = {
        backgroundColor: "#F0F0F0",
        borderWidth: "0",
        color: "#000000",
        borderRadius: "16px",
        padding: "8px 16px",
    }

    var zeroDollarDeliveryFeeArray = [];

    restaurants.forEach(restaurant => {
        if (restaurant.freeDelivery === true) {
            zeroDollarDeliveryFeeArray.push(restaurant)
        }
    })

    return (
        <>
            <Container>
                <Row>
                    <Col xs={3} sm={1} className="my-auto">
                        <img src={zeroFee} alt="$0 delivery fee" />
                    </Col>
                    <Col xs={9} sm={5}>
                        <h1>$0 Delivery Fee</h1>
                        <p className="text-muted">Share a delivery partner with a nearby order</p>
                    </Col>
                    <Col xs={12} sm={6} className="my-auto">
                        <Button style={btnStyle}>
                            New options in 1:05
                    </Button>
                    </Col>
                </Row>

            </Container>

            <ThreeColCarousel restaurants={zeroDollarDeliveryFeeArray} />

        </>
    )
}

export default ZeroDollarDeliveryFee;