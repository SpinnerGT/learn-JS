"use strict"
import {game} from "./Challenge1.js"


//1.
let score_str = '';
for (const [i, el] of game.scored.entries()) {
    score_str += `Goal ${i}: ${el}\n`;
}
console.log(score_str)
//2.
let sum = 0;
const values = Object.values(game.odds)
for (const value of values) {
    sum += value;
}
const average = sum / values.length;
console.log(average)

//3.


for (const [i, el] of Object.entries(game.odds)) {
    const str1 = `Odd of victory ${game[i]}: ${el}`;
    const team_str = i === 'x' ? `Odd of draw: ${el}` : str1;
    console.log(team_str)
}

// BOUNS
// const scorers = {
//     Gnarby: 0,
//     Lewandowski: 0,
//     Hummels: 0
//
// };
// for (const n of game.scored) {
//     scorers[n] += 1
// }
// console.log(scorers)
const scorers = {};
for (const n of game.scored) {
    // 是否存在
    scorers[n] ? scorers[n]++ : scorers[n] = 1;
}
console.log(scorers)


//4.
