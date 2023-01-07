const restartGame = document.querySelector('.newGame');
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');
const innerColor = document.querySelector('.innerColor');
const innerColorTwo = document.querySelector('.innerColorTwo');
let playerOne = document.querySelector('.pointsOne');
let playerTwo = document.querySelector('.pointsTwo');
let score = document.querySelector('.ScoreOne');
let array = [];
let random = 


roll.addEventListener('click', () => {
  playerOne.textContent = Number(Math.round(Math.random() * 7) - 1); 
  playerTwo.textContent = Number(Math.round(Math.random() * 7) - 1);
  array.push(Number(playerOne.textContent));
  let i = 0;

  for (let x of array) {
    i += Number(x);
    score.textContent = i;
  }

  if (playerOne.textContent <= 0){
    playerOne.textContent = 0;
    score.textContent = 0;
    if (playerOne.textContent == 0){
      innerColor.classList.add('hidden')
      innerColorTwo.classList.remove('hidden')
  
    }
  }

});
