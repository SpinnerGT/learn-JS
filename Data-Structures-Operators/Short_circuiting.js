"use strict"

import {restaurant} from "./restaurantVar.js"

// ||
console.log(undefined || 0 || "" || "HELLO" || 23)

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guests2 = restaurant.numGuests || 10;  // if == 0  bug

// &&
if (restaurant.orderPizza) {
    restaurant.orderPizza("mushrooms", "spinach")
}
// if it exits
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach")