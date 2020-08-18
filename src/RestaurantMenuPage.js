import React, { useEffect } from "react";
import { Card, Row, Col, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";
import { getPriceRange, getMenuUrl } from "./HelperFunctions"

const RestaurantMenuPage = ({ restaurant }) => {

    // const restaurantSpecialty = ["Asian fusion", "Vietnamese", "Noodles", "Gourmet", "Wings",
    //     "Fish and Chips", "Lebanese", "Middle Eastern", "Greek", "Desserts", "African", "Juice and Smoothies", "Allergy Friendly",
    //     "Salads", "Thai", "Asian", "Vegan", "Breakfast and Brunch", "Sushi", "Japanese", "BBQ", "Mediterranean",
    //     "Caribbean", "Sandwich", "Burgers", "Family Meals", "Mexican", "South American", "Fast Food", "Healthy",
    //     "Bakery", "Cafe", "Donuts", "Pizza", "American", "Italian", "Family Meals", "Pasta", "Comfort Food", "Wings",
    //     "Portuguese", "Seafood", "Deli", "Indian", "Thai", "Halal", "Chinese"
    // ]

    const navItems = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"]
    const headingIds = navItems.map(item => getMenuUrl(item))

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <RestaurantMenuHeader restaurant={restaurant} />
            <Container>
                <ScrollspyNavbar navItems={navItems} headingIds={headingIds} />
                <MealCategoryDivs restaurant={restaurant} headingIds={headingIds} navItems={navItems} />
            </Container>
        </div>
    )
}

const MealCategoryDivs = ({ headingIds, navItems, restaurant }) => {
    return (
        <>
            {
                headingIds.map((id, index) => {
                    return (
                        <div className="mt-3" id={`${id}-div`}>
                            <h2 className="pt-4 my-0" id={id}>{navItems[index]}</h2>
                            <RestaurantMenuCardDeck restaurant={restaurant} category={navItems[index]} />
                        </div>
                    )
                })
            }
        </>
    )
}

const RestaurantMenuHeader = ({ restaurant }) => {
    return (
        <Row variant="danger" style={{ height: "43vh", backgroundImage: `url(${restaurant.restaurantImage})`, backgroundSize: "cover" }}>
            <RestaurantDetails restaurant={restaurant} />
        </Row>
    )
}

const RestaurantDetails = ({ restaurant }) => {
    const bullet = "\u2022";

    const deliveryTimeStr = `${restaurant.deliveryTime}-${restaurant.deliveryTime + 10}`
    const priceRange = getPriceRange(restaurant.price)
    const specialty = restaurant.restaurantSpecialty.split(",").join(bullet);

    return (
        <Col sm={12} md={6} lg={5} className="my-auto pl-5 py-3" style={{ backgroundColor: "#FFFFFF" }}>
            <h1>{restaurant.restaurantName}</h1>
            <Card.Text className="mb-1">${priceRange} {bullet} {specialty}</Card.Text>
            <Card.Text>
                {deliveryTimeStr} Min {bullet} {restaurant.rating}<span className="text-muted">(473)</span> {bullet} ${restaurant.deliveryFee.toFixed(2)} Delivery Fee
            </Card.Text>
            <p className="mb-1">{restaurant.address} {bullet} <Link to="/menu">More info</Link></p>
        </Col>
    )
}

const RestaurantMenuCardDeck = ({ restaurant, category }) => {
    return (
        <Row className="row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3">
            {(restaurant.meal).map(item => {
                if (item.category === category) {
                    return (
                        <RestaurantMenuCard itemName={item.name} price={item.price} image={item.image} />
                    )
                }
            })}
        </Row>
    )
}

const RestaurantMenuCard = ({ itemName, price, image }) => {
    return (
        <Col className="mt-4">
            <Card className="restaurant-menu-item" style={{ borderWidth: "0.5px" }} >
                <Row >
                    <Col xs={7} >
                        <Card.Body>
                            <h5>
                                {itemName}
                            </h5>
                            <Card.Text>
                                ${price}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col xs={5} >
                        <Card.Img src={image} alt="item img" />
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

const ScrollspyNavbar = ({ navItems, headingIds }) => {
    const horizontalScrollMenuStyle = {
        display: "flex",
        overflowX: "auto",
        flexWrap: "nowrap"
    }

    const menuItemStyle = {
        color: "black",
        textAlign: "center",
        padding: "16px",
        textDecoration: "none",
        flex: "0 0 auto",
    }

    return (
        <div className="border-bottom pl-0 sticky-top bg-white horizontal-navbar">
            <ScrollspyNav
                scrollTargetIds={headingIds}
                activeNavClass="is-active"
                scrollDuration="500"
                offset={-57}
            >
                <Nav style={horizontalScrollMenuStyle}>
                    {headingIds.map((id, index) => {
                        return <Nav.Link className="text-dark" href={`#${id}`} style={menuItemStyle}>{navItems[index]}</Nav.Link>
                    })}
                </Nav>
            </ScrollspyNav>
        </div>
    )
}

export default RestaurantMenuPage;