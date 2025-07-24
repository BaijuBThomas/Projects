const timeInput = document.querySelector('.time');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

displayTimer()

function displayTimer() {
    let h = hours<10 ? '0'+hours : hours;
    let m = minutes<10 ? '0'+minutes : minutes;
    let s = seconds<10 ? '0'+seconds : seconds;

    timeInput.textContent = `${h}:${m}:${s}`;
}

function startTimer() {
    if(interval) return;
    interval = setInterval(() => {
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
        }
        if(minutes==60){
            minutes=0;
            hours++;
        }
        displayTimer();
    }, 1000);
    
}

function pauseTimer(){
  clearInterval(interval);
  interval = null;
 
}

function resetTimer(){
    pauseTimer()
    hours = 0;
     minutes = 0;
    seconds = 0;
    displayTimer()
}