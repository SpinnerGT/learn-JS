"use strict"
import {restaurant} from "./restaurantVar.js"

// destructing (unpack and pack) 左边是打包，右边是解包
const arr = [1, 2, ...[2, 2, 2, 2]];

// rest patterns
const [a, b, ...other] = [1, 2, 3, 4, 5];

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

// rest object
const {sat, ...weekdays} = restaurant.openingHours;


// function
function add(...para) { // 打包成数组
    let sum = 0;
    for (let i = 0; i < para.length; i++) {
        sum += para[i]
    }
}

const x = [1, 2, 3, 4, 5];
add(...x) // unpacking


restaurant.orderPizza('chocolate', 'orange', 'cheese', 'apple')
