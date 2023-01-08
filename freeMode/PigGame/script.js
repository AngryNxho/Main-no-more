const restartGame = document.querySelector('.newGame');
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');
const innerColor = document.querySelector('.innerColor');
const innerColorTwo = document.querySelector('.innerColorTwo');
let playerOne = document.querySelector('.pointsOne');
let playerTwo = document.querySelector('.pointsTwo');
let score = document.querySelector('.ScoreOne');
let array = [];
let i = 0;

function playerOneF(){
  playerOne.textContent = Math.round(Math.random() * 7) - 1;
  if (playerOne.textContent <= 0){
    playerOne.textContent = 1;
    array.push(Number(playerOne.textContent));
  }
  else{
    array.push(Number(playerOne.textContent));
  }

  i+= array[array.length - 1];
  if (playerOne.textContent == 0){
    score.textContent = 0;
    i = 0;
  }else{
    score.textContent = i;

  }
}

roll.addEventListener('click', () => {
  playerOneF();
});

