"use strict"

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // nested object
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    // 传入object
    orderDelivery: function ({
                                 starterInd = 1, //default value
                                 mainInd = 0,
                                 time = '20:00',
                                 address
                             }) {
        const str = `Order received! ${this.starterMenu[starterInd]} and ${this.mainMenu[mainInd]} will be delivered to ${address} at ${time}`;
        console.log(str);
    }
};

// order of object is not important
// destructuring
const {name, location} = restaurant
// other name
const {
    categories: rst_categories,
    starterMenu: rst_start_menu,
    mainMenu: rst_main_menu
} = restaurant;

//default values
const {
    menu: rst_menu = [] // default
} = restaurant;

// mutating variables
let a = 1;
let b = 2;
const obj = {a: 10, b: 20};
({a, b} = obj); // 注意括号
//console.log(a, b)

// nested object
const {openingHours} = restaurant
const {
    fri: {
        open: o,
        close: c
    }
} = openingHours;


// 按名称传入数据，而不是位置
restaurant.orderDelivery({
    address: "福雷德小区"
    // other default
})

export {restaurant}; // export values npm init -y and "type": "module"