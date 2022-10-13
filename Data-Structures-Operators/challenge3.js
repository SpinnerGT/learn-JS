'use strict'
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

//1. Create an array 'events' of the different game events that happened (no duplicates)
let events = [];
for (const [, event] of gameEvents) {
    events.push(event);
}
events = [...new Set(events)];

//2. After the game has finished, was found that the yellow card from minute 64 was unfair.
// So remove this event from the game events log.
//gameEvents.delete(64);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
let cnt = 0;
for (const [key, value] of gameEvents) {
    if (key <= 90) {
        cnt++;
    }
}
const log_str = `An event happened, on average, every ${90 / cnt} minutes`;
console.log(log_str);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

for (const [key, value] of gameEvents) {
    const half = key <= 45 ? "FIRST HALF" : "SECOND HALF";
    console.log(`[${half}] ${key}: ${value}`);
}
