import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

export const getHeartIcon = (isFavourite, size) => {
    if (isFavourite) {
        return <FontAwesomeIcon icon={fasHeart} size={size} style={{ color: "#FFFFFF" }} />
    }
    return <FontAwesomeIcon icon={farHeart} size={size} style={{ color: "#FFFFFF" }} />
}

export const average = (arr) => {
    return arr.reduce((a, b) => a + b) / arr.length
}

export const getMenuUrl = (str) => {
    var cleanedUpString = (str.split("'").join("")).split(" ").join("-")
    return cleanedUpString.toLowerCase();
}

export const getPriceRange = (allMealsArray) => {
    var priceArray = [];

    try {
        allMealsArray.forEach(item => {
            priceArray.push(item.price)
        })

        var averagePrice = average(priceArray);

        if (averagePrice < 20) {
            return "$"
        } else if (averagePrice < 30) {
            return "$$"
        }
        return "$$$"
    } catch (error) {
        console.log(error)
    }
}


