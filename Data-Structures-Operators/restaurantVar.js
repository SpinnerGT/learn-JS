"use strict"


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
    },

    // packing and unpacking
    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    }
};

export {restaurant}; // export values npm init -y and "type": "module"