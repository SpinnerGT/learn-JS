"use strict"

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // 返回数组
    order: function (startInd, mainInd) {
        return [this.starterMenu[startInd], this.mainMenu[mainInd]]
    }
};

// destructuring
let [a, b, c, d] = restaurant.categories; // 全部分配
const [x, y] = restaurant.categories; // 分配前两个
const [aa, , cc] = restaurant.categories; // 有间隔


// 交换
[b, a] = [a, b];

console.log(restaurant.order(1, 0));

// default value
const [p, q, r = 1] = [2, 3]; // 此时有缺失的位置

// nested destructuring
const nested = [2, 4, [3, 9]];
const [i, , [j, k]] = nested;