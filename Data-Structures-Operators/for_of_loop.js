"use strict"

import {restaurant} from "./restaurantVar.js";

// array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// only item
for (const menuItem of menu) {
    console.log(menuItem)
}

// ask index : entries()
for (const item of menu.entries()) {
    console.log(`${item[0] + 1}:${item[1]}`)
}

// unpacking
for (const [i, el] of menu.entries()) {
    console.log(`${i}:${el}`)
}

// look into array.entries()
//console.log([...menu.entries()])