"use strict"


// 产生随机数
let secretNumber = Math.trunc(Math.random() * 20) + 1//random[0,1]
//document.querySelector('.number').textContent = secretNumber;
// 初始分数
let score = 20;
// 初始最高分
let highscore = 0;

// 点击check！
document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);// 输入为字符串->number
    // 如果没有输入
    if (!guess) {
        displayMessage('⛔ please enter a number');
    }
    // 猜对了
    else if (guess === secretNumber) {
        // 显示恭喜，同时更改背景颜色
        document.querySelector('.message').textContent = '🎉Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347';//注意-变成驼峰
        // 最高分榜
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    //没有猜对
    else {
        //只有分数>0才能继续
        if (score > 0) {
            // 猜大了
            let tmp = guess > secretNumber ? 'Too High' : 'Too Low';
            displayMessage(tmp);
            score--;
            // score面板更新
            document.querySelector('.score').textContent = score;

        }

    }
})

// 点击AGAIN!
document.querySelector('.again').addEventListener('click', function () {
    // score重置
    score = 20;
    // secretNumber重置
    secretNumber = Math.trunc(Math.random() * 20) + 1//random[0,1]
    // 背景重置

    // 显示重置
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';//注意-变成驼峰
    document.querySelector('.guess').value = '';
})


// 重构1：显示信息更该函数
const displayMessage = (msg) => {
    document.querySelector('.message').textContent = msg;
}