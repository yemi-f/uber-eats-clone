import React from "react";
import HeaderBody from "./HeaderBody"
import FoodCategories from './FoodCategories';
import NarrowBy from "./NarrowBy"
import ZeroDollarDeliveryFee from './ZeroDollarDeliveryFee';
import AllRestaurants from "./AllRestaurants";
import YourFavourites from "./YourFavourites";
import RestaurantSkeletonCardDeck from "./RestaurantSkeletonCardDeck";

const Homepage = ({ restaurants, isLoading }) => {
    return (
        <>
            {isLoading && <RestaurantSkeletonCardDeck />}
            <>
                <HeaderBody />
                <FoodCategories />
                <NarrowBy />
                <ZeroDollarDeliveryFee restaurants={restaurants} />
                <YourFavourites restaurants={restaurants} />
                <AllRestaurants restaurants={restaurants} />
            </>
        </>
    )
}

export default Homepage;