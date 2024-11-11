const display = document.querySelector('.display');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapTimesList = document.getElementById('lapTimes');

let intervalId;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startStop() {
    if (intervalId) {
        clearInterval(intervalId);
        startStopBtn.textContent = 'Start';
    } else {
        intervalId = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
            display.textContent = formattedTime;
        }, 10);
        startStopBtn.textContent = 'Stop';
    }
}

function reset() {
    clearInterval(intervalId);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    display.textContent = '00:00:00';
    lapTimesList.innerHTML = '';
    startStopBtn.textContent = 'Start';
}

function lap() {
    const lapTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    const li = document.createElement('li');
    li.textContent = lapTime;
    lapTimesList.appendChild(li);
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);