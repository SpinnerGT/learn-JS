"use strict"

import {restaurant} from "./restaurantVar.js"

// 并不知道这个属性是否存在 ?. 一般与 ？？ 连用

console.log(restaurant.openingHours.mon?.open)

// variable
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? "close"; // 如果undefined则不开（0也是开的）
    const s = open !== "close" ? `open at ${open}` : "close"
    console.log(`On ${day},We ${s}`)
}

// method
const t = restaurant.order?.(0, 1) ?? "Method does not exist" // 是否存在方法，若不存在则没有
console.log(t)


// Arrays
const user = [{
    name: "wyj",
    email: "471177874@qq.com"
},
    {
        name: "love deer",
        email: "123"
    }];

const name = user[3]?.name ?? "unknown";
// equal :
// if (user.length > 3) ....