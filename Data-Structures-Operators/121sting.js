'use strict'

// 1.slice
// slice(1) 第一到最后
// slice(1,2) 1->2

// check seat
function checkMiddleSeat(seat) {
    const s = seat.slice(-1);
    if (s === 'B' || s === 'C') {
        console.log("Your get middle seat")
    }
}

checkMiddleSeat("23B")


// 2..toLowercase()
// 3.trim()  除去前后的空白

// 4.replace
// replace("","")
// replaceAll("","")


// 5.regular
// /door/g 全局

// 6.includes()
// startsWith()


// 7. split/join


//8. padding
// 信用卡号码隐藏
function mask_credit_card(number) {
    const str = number + ''; // 转化为字符串
    const e = str.slice(-4);
    return e.padStart(str.length, '*');
}

// repeat
//console.log('❤'.repeat(10))
function planes_in_line(n) {
    const str = `There are ${n} planes in line ${'✈'.repeat(n)}`;
    console.log(str)
}

planes_in_line(10)