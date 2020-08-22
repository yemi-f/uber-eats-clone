import React from "react";
import vietnamese from "./images/vietnamese.png"
import healthy from "./images/healthy.png"
import halal from "./images/halal.png"
import chinese from "./images/chinese.png"
import thai from "./images/thai.png"
import mexican from "./images/mexican.png"
import japanese from "./images/japanese.png"
import italian from "./images/italian.png"
import indian from "./images/indian.png"
import fastfood from "./images/fastfood.png"
import comfortfood from "./images/comfortfood.png"
import caribbean from "./images/caribbean.png"
import bakery from "./images/bakery.png"
import american from "./images/american.png"
import { Container } from "react-bootstrap";

const FoodCategories = () => {

    const categories = [
        {
            title: "Comfort Food",
            image: comfortfood,
        },
        {
            title: "Indian",
            image: indian,
        },
        {
            title: "Thai",
            image: thai,
        },
        {
            title: "American",
            image: american,
        },
        {
            title: "Japanese",
            image: japanese,
        },
        {
            title: "Bakery",
            image: bakery,
        },
        {
            title: "Italian",
            image: italian,
        },
        {
            title: "Mexican",
            image: mexican,
        },
        {
            title: "Caribbean",
            image: caribbean,
        },
        {
            title: "Fast Food",
            image: fastfood,
        },
        {
            title: "Vietnamese",
            image: vietnamese,
        },
        {
            title: "Halal",
            image: halal,
        },
        {
            title: "Chinese",
            image: chinese,
        },
        {
            title: "Healthy",
            image: healthy,
        }
    ]


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
        <Container className="horizontal-navbar" style={horizontalScrollMenuStyle}>
            {
                categories.map((item, index) => {
                    return (
                        <a href="/" key={index} style={menuItemStyle}>
                            <img height="60px" src={item.image} alt={item.title} />
                            <div>{item.title}</div>
                        </a>
                    )
                })
            }
        </Container>
    )
}

export default FoodCategories;