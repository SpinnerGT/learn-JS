"use strict"

const attr = {
    Mon: "数据库"
};
const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const schedule = {
    attr, // 1.ES6
    Tue: "操作系统",
    Wed: "cpp",
    Thu: "sports",
    Fri: "bigNumber",
    // 3. variable can be calculated
    [week[6] - 1]: "今天星期六没有课",

    // 2.writing method 不用写function 了
    findClass(week) {
        console.log(this[week]);
    }
};
schedule.findClass("Tue")