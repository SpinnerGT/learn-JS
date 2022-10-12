"use strict"

import {restaurant} from "./restaurantVar.js";

//一. array
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


// 二. object

// keys
const properties = Object.keys(restaurant.openingHours) // is array
let openStr = `we are open on ${properties.length} days:`;
for (const obj of properties) {
    openStr += `${obj},`
}

// values
const values = Object.values(restaurant.openingHours)

// entries  : key/value
const entries = Object.entries(restaurant.openingHours);
for (const [key, {open, close}] of entries) {

}
