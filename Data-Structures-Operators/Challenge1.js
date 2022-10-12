"use strict"

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
// const players1 = game.players[0];
// const players2 = game.players[1];
const [players1, players2] = game.players;
// 2.The first player in any player array is the goalkeeper and the others are field players.
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name,
// and one array ('fieldPlayers') with all the remaining 10 field players
// game.team1_gk = players1[0];
// game.team1_fieldPlayers = players1.slice(1);
const [gk, ...fieldPlayers] = players1;

game.team2_gk = players2[0];
game.team2_fieldPlayers = players2.slice(1);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
game.allPlayers = [...players1, ...players2];

// 4. During the game, Bayern Munich (team 1) used 3 substitute players.
// So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];


// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {team1, x: draw, team2} = game.odds;
// const {odds:{team1, x: draw, team2} = game;

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console,
// along with the number of goals that were scored in total (number of player names passed in)
function printGoals(...players) { // pack to array
    const total = players.length;
    //  console.log(`${total} goals were scored`)
}

printGoals(...game.scored)// unpack
//printGoals('wyj','love deer')
//printGoals('wyj')

// 7. The team with the lower odd is more likely to win.
// Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
//const winner = team1 > team2 ? team1 : team2;

//team1 > team2 && console.log(team1)
//team1 < team2 && console.log(team2)

export {game};