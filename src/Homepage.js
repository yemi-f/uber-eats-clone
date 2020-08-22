import React from "react";
import HeaderBody from "./HeaderBody"
import FoodCategories from './FoodCategories';
import NarrowBy from "./NarrowBy"
import ZeroDollarDeliveryFee from './ZeroDollarDeliveryFee';
import AllRestaurants from "./AllRestaurants";
import YourFavourites from "./YourFavourites";

const Homepage = ({ restaurants }) => {
    return (
        <div>
            <HeaderBody />
            <FoodCategories />
            <NarrowBy />
            <ZeroDollarDeliveryFee restaurants={restaurants} />
            <YourFavourites restaurants={restaurants} />
            <AllRestaurants restaurants={restaurants} />
        </div>
    )
}

export default Homepage;