const restartGame = document.querySelector('.newGame');
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');
const innerColor = document.querySelector('.innerColor');
const innerColorTwo = document.querySelector('.innerColorTwo');
let playerOne = document.querySelector('.pointsOne');
let playerTwo = document.querySelector('.pointsTwo');
let score = document.querySelector('.ScoreOne');
const pointsFake = document.querySelector('.pointsFake1')
const pointsFake2 = document.querySelector('.pointsFake2')
let array = [];
let array2 = [];
let i = 0;

function zeroCheck(number, numberTwo){
  if (number == 0){
    innerColor.classList.add('hidden');
    innerColorTwo.classList.remove('hidden');
  }else if (numberTwo == 0){
    innerColor.classList.remove('hidden');
    innerColorTwo.classList.add('hidden');
  }

  for (let x = 0; x < array.length; x++){
    i += array[x];
  }
  return i;
}

roll.addEventListener('click', () => {
  playerOne.textContent = Math.round(Math.random() * 7) - 1;
  playerTwo.textContent = Math.round(Math.random() * 7) - 1;
  if (playerOne.textContent < 0){
    playerOne.textContent = 0;

  }else if (playerOne.textContent > 0){
    array.push(Number(playerOne.textContent));

  }if (playerTwo.textContent < 0){
    playerTwo.textContent = 0;
  }else{
    array2.push(Number(playerTwo.textContent));
  }
  zeroCheck(playerOne.textContent, playerTwo.textContent);

  
  
  console.log(i);
  
});

