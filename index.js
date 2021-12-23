// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.

const btn = document.getElementById("btn");
let timerMin = document.getElementById("timer-min");
let timerSec = document.getElementById("timer-sec");

// let affirmation = document.getElementById("affirmation");
let timeout;

const audio = new Audio("audio/timer.mp3");
const meditation = new Audio("audio/fifteenmin.mp3");

// meditation audio
// Artist: Unknown
// Music: 15 Minute Super Deep Meditation Music Relax Mind Body Inner Peace Relaxing Music 2563B

let minutes = 14;
let seconds = 60;

function time() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timeout);
    meditation.pause();
    meditation.currentTime = 0;
    audio.volume = 0.4;
    audio.play();
  } else if (seconds === 0) {
    seconds = 60;
    minutes--;
  } else if (seconds <= 10) {
    seconds--;
    timerSec.textContent = `0${seconds}`;
  } else {
    seconds--;
    timerMin.textContent = `${minutes}`;
    timerSec.textContent = `${seconds}`;
  }
}

function begin() {
  clearInterval(timeout);
  meditation.pause();
  meditation.currentTime = 0;
  meditation.play();
  timeout = setInterval(time, 1000);
}

// BUTTONS
btn.addEventListener("click", function () {
  minutes = 14;
  seconds = 60;
  begin();
});

document.getElementById("btn30").addEventListener("click", function () {
  minutes = 0;
  seconds = 30;
  begin();
});

document.getElementById("btn1").addEventListener("click", function () {
  minutes = 0;
  seconds = 60;
  begin();
});

document.getElementById("btn5").addEventListener("click", function () {
  minutes = 4;
  seconds = 60;
  begin();
});

document.getElementById("btn10").addEventListener("click", function () {
  minutes = 9;
  seconds = 60;
  begin();
});
