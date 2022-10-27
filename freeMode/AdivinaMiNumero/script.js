'use strict';

// document.querySelector('.score').textContent = 2;

// document.querySelector('.vidas').textContent = 2;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let userGuess = document.querySelector('.input').value;
let score = 10;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.start').textContent = message;
};

const changeScore = function(score) {
  document.querySelector('.score').textContent = score;
};

const changeBackground = function(background) {
  document.querySelector('body').style.background = background;
};

document.querySelector('.check').addEventListener('click', function () {
  let userGuess = Number(document.querySelector('.input').value);

  if (!userGuess) {
    displayMessage('No es un numero');
  } else if (userGuess !== secretNumber) {
    displayMessage(userGuess > secretNumber ? 'Muy Alto' : 'Muy Bajo');
    score--;
    document.querySelector('.input').value = '';
    changeScore(score);

    if (score < 1) {
      displayMessage('😭 GAME OVER');
      changeScore(0);
    }
  } else if (userGuess === secretNumber) {
    displayMessage('🏆 Haz ganado!!!');
    changeBackground('url(b5d55223b5fb572948d1e1e971ef4478.jpg)');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Empieza a adivinar');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;

  changeScore(10);

  changeBackground(
    'url(https://c4.wallpaperflare.com/wallpaper/1015/933/121/abstract-grey-gray-minimalist-wallpaper-preview.jpg)'
  );
  document.querySelector('.input').value = '';
});
