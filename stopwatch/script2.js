const timeInput = document.querySelector('.time');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds=0;
let interval = null;

startBtn.addEventListener('click', startAction);
pauseBtn.addEventListener('click', pauseAction);
resetBtn.addEventListener('click', resetAction);

function display(){
    let h = hours>10 ? "0"+hours : hours;
    let m = minutes>10 ? "0"+minutes : minutes;
    let s = seconds>10 ? "0"+seconds : seconds;
    let ms = milliseconds<100 ? (milliseconds<10 ? "00"+milliseconds : "0"+milliseconds) : milliseconds;

    timeInput.textContent = `${h}:${m}:${s}:${ms}`  
}

function startAction() {
    if(interval) return;

    interval = setInterval(()=>{
        milliseconds +=10;

        if(milliseconds >= 1000){
            milliseconds = 0;
            seconds++;
        }
        if(seconds >= 60){
            seconds =0;
            minutes++;
        }
        if(minutes >= 60){
            minutes=0;
            hours++;
        }
      display()  
    },10);
}

function pauseAction() {
    clearInterval(interval);
     interval = null;
}

function resetAction(){
    pauseAction()
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds=0;
     display();
}