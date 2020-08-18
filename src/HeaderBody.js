import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap"

const HeaderBody = () => {



    return (
        <Container fluid>
            <Row variant="warning" style={{ backgroundColor: "#122329" }} >
                <Col xs={12} sm={4} className="my-auto px-4 mr-n4 margin-tp" style={{ color: "#FFFFFF" }}>
                    <h1 className="pr-5 text-pr">Crave it? Get it.</h1>
                    <p className="pr-5 text-pr">Search for a favourite restaurant, cuisine, or dish.</p>
                </Col>
                <Col xs={12} sm={4} className="my-4 py-4 ml-n4 px-4 margin-left" style={{ backgroundColor: "#E2F3DD" }}>
                    <h1>Enjoy 30% off (up to $20)</h1>
                    <p>For 5 orders. $50 minimum order</p>
                    <Button className="border-0" style={{ borderRadius: "16px", backgroundColor: "#000000", color: "#FFFFFF" }}>See details</Button>
                </Col>
                <Col xs={12} sm={4} className="my-4 py-4 ml-4 px-4 margin-left" style={{ backgroundColor: "#000000", color: "#FFFFFF", borderWidth: "8px !important" }}>
                    <h1>Support Black-owned restaurants</h1>
                    <h5 className="font-weight-normal">Show your support by ordering from Black-owned restaurants with no Deleivery fee.</h5>
                    <Button className="border-0" style={{ borderRadius: "16px", backgroundColor: "#FFFFFF", color: "#000000" }}>Order Now</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HeaderBody;