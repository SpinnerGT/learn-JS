'use strict'
import {restaurant} from "./restaurantVar.js";

// create map
const rest = new Map();
const question = new Map([
        ['question', 'What is the  best programming language?'], // [key ,value]
        [1, 'C'],
        [2, 'JavaScript'],
        [3, 'Python'],
        ['correct', 3],
        [true, 'Correct 🎉'],
        [false, 'Wrong 😕']
    ]
);

// convert object to map
const op = restaurant.openingHours;
const op_map = new Map(Object.entries(op));

rest.set('name', 'Classico Italiano'); // string => string

rest.set('open', 11)
    .set('close', 23); //  set return map!


rest.set(1, 'Firenze, Italy')//  number => string
    .set(2, 'Lisbon, Portugal')

rest.set('categories', ['Italiano', 'Pizzeria', 'Organic'])  // string => array

rest.set(true, 'We are open :D')
    .set(false, 'We are closed :('); // boolean => string


// get
rest.get('name')

const time = 21
// 只有在开业时间才营业
const 是否开业 = time > rest.get('open') && time < rest.get('close')
//console.log(rest.get(是否开业))

// has / delete(key) / .size

// ! heap 与 stack
rest.set([1, 2], 'TEST') // 这个是在heap
rest.get([1, 2]) // 不存在
const a = [1, 2]
rest.set(a, 'TEST') // 这个才行


// 与网页交互
//rest.set(document.querySelector('h1'), 'Heading');


// quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === "number") {
        console.log(key, value);
    }
}

const answer = Number(prompt("Your answer:"))
const 是否回答正确 = answer === question.get('correct');
console.log(question.get(是否回答正确));


// convert to array
console.log([...question])
// 需要所有的key/value
console.log([...question.keys()])
console.log([...question.value()])