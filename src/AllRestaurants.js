import React from "react";
import ResponsiveCardDeck from "./ResponsiveCardDeck";
import RestaurantCard from "./RestaurantCard";

const AllRestaurants = ({ restaurants }) => {

    return (
        <ResponsiveCardDeck>
            {restaurants.map(restaurant => {
                console.log(restaurant)
                return <RestaurantCard restaurant={restaurant} />
            })}
        </ResponsiveCardDeck>
    )
}




export default AllRestaurants;