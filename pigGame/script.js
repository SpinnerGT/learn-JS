"use strict"

// declare
let scores, currentScore, activePlayer, playing;


// select element
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


// initial
init()


// main
// 1. roll dice
btnRoll.addEventListener('click', rollDice)
// 2. hold
btnHold.addEventListener('click', hold)
// 3. reset
btnNew.addEventListener('click', init)

// function
// 1.rolling dice
function rollDice() {
    if (playing) {//1.generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2.display dice
        //1)更新img
        diceEl.src = `dice-${dice}.png`;
        //2)显示图片
        diceEl.classList.remove('hidden')

        //3.Check roll
        // 1）判断是否为1
        // 如果为不是1
        if (dice !== 1) {
            // 分数加上摇色子的
            currentScore += dice;
            // 当前玩家current更新
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        // 如果是1
        else {

            switchPlayer();

        }
    }

}

//2.hold
function hold() {
    // 分数
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // 是否>=100
        if (scores[activePlayer] >= 10) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('activePlayer')
            // 此时禁止点击按钮（除重新开始）
            playing = false;
            diceEl.classList.add('hidden')
        } else {
            switchPlayer();
        } // 切换玩家}
    }


}


// switch player
function switchPlayer() {

    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    // 切换状态toggle
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0; // 两个切换的
}


function init() {
    scores = [0, 0];
    activePlayer = 0; // 开始玩家为0
    playing = true;
    diceEl.classList.add('hidden')
    currentScore = 0;

    score0El.textContent = '0';
    score1El.textContent = '0';
    currentScore0El.textContent = '0';
    currentScore1El.textContent = '0';

    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
}
