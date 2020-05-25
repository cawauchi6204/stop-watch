'use strict';

const timer = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');


let startTime;
let timeoutId;
let elapsedTime = 0;

function countUp() {
    // console.log(Date.now() - startTime);
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2,'0');
    const s = String(d.getSeconds()).padStart(2,'0');
    const ms = String(d.getMilliseconds()).padStart(3,'0');
    
    timer.textContent = `${m}:${s}:${ms}`
    
    timeoutId = setTimeout(() => {
        countUp();
    },10);
}

function setButtonStateInitial() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
}

function setButtonStateRunning() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = true;
}

function setButtonStateStopped() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
}

setButtonStateInitial();



startBtn.addEventListener('click' , () => {
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
});
// Date.now();は1970年1月1日をスタートとしてm秒単位で数値を取得する

stopBtn.addEventListener('click' , () => {
    setButtonStateStopped();
        clearTimeout(timeoutId);
        elapsedTime += Date.now() - startTime;
        console.log(elapsedTime);
})

resetBtn.addEventListener('click' , () => {
    timer.textContent = '00:00:000';
    elapsedTime = 0;
})

