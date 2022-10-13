"use strict"
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// 获取文本
document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value
    const text_array = text.split("\n");

    for (const [ind, s] of text_array.entries()) {
        const tmp = s.trim().split("_"); // 除去前后空格和分割
        let str = tmp[0].toLowerCase();
        for (let i = 1; i < tmp.length; i++) {
            str += tmp[i][0].toUpperCase() + tmp[i].slice(1).toLowerCase()
        }

        console.log(`${str.padEnd(30)}${'✅'.repeat(ind + 1)}`)
    }

})
