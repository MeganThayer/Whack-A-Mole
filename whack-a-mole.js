const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const score = document.querySelector('#score');
const timeLeft = document.querySelector('#timeLeft');
const easyButton = document.querySelector('.easyButton');
const mediumButton = document.querySelector('.mediumButton');
const hardButton = document.querySelector('.hardButton');
const startButton = document.querySelector('#startButton');

let result = 0;
let hitPosition
let currentTime = 60;
let timerId = null;

easyButton.addEventListener('click', () => {
  easyButton.classList.add('redButton');
  mediumButton.classList.remove('redButton');
  hardButton.classList.remove('redButton');
})

mediumButton.addEventListener('click', () => {
  easyButton.classList.remove('redButton');
  mediumButton.classList.add('redButton');
  hardButton.classList.remove('redButton');
})

hardButton.addEventListener('click', () => {
  easyButton.classList.remove('redButton');
  mediumButton.classList.remove('redButton');
  hardButton.classList.add('redButton');
})


startButton.addEventListener('click', () => {
  startButton.disabled = true;
  setTimeout(() => {
    startButton.disabled = false;
  }, 60001);
})

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole');
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add('mole');

  hitPosition = randomSquare.id;
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  })
})

function moveMole() {
  if (easyButton.classList.contains('redButton')) {
    timerId = setInterval(randomSquare, 1000);
  }
  if (mediumButton.classList.contains('redButton')) {
    timerId = setInterval(randomSquare, 750);
  }
  if (hardButton.classList.contains('redButton')) {
    timerId = setInterval(randomSquare, 550);
  }

}

function countDownTimer() {

let countDownTimerId = setInterval(countDown, 1000);  

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("GAME OVER Your Final Score Is: " + result);
    currentTime = 60;
  }
};
}

