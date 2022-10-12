'use strict'

// create map
const rest = new Map();
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
console.log(rest.get(是否开业))

// has / delete(key) / .size

// ! heap 与 stack
rest.set([1, 2], 'TEST') // 这个是在heap
rest.get([1, 2]) // 不存在
const a = [1, 2]
rest.set(a, 'TEST') // 这个才行


// 与网页交互
rest.set(document.querySelector('h1'), 'Heading');
