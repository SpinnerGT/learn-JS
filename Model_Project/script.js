"use strict";

// 获取对象
const btnShowModal = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// 点击就打开
for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', openModel);
    overlay.addEventListener('click', openModel);
}
// 点×/背景/esa关闭
btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

// 全局监听
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModel();
    }
})


/* 函数 */

// 点击按钮打开函数 (通过类操作）
function openModel() {
    // 点击按钮删除隐藏
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


// 关闭函数
function closeModel() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}