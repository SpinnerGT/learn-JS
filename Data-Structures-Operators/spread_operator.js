import {restaurant} from "./restaurantVar.js"

"use strict"

// Data needed for first part of the section
// 添加一个函数
restaurant.orderPastas = function (ing1, ing2, ing3) {
    const str = `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`;
    console.log(str)
};

// expend
const old_array = ["a", "b", "c", "d", "e",];
const new_array = [1, 2, ...old_array]

const new_menu = [...restaurant.mainMenu, "东坡肉"]
// destructuring array
const array = [1, 2]

// 函数解包传参
const add = (a, b) => a + b;
add(...array) //  == add(array[0], array[1])

const ingredients = ["a", "b", "c"];
restaurant.orderPastas(...ingredients);

// string to char
const str = "Jane"; // J a n e


// copy
//1)shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

// copy and add new
const new_rst = {foundedIn: 1998, founder: "WYJ", ...restaurant};


// join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

