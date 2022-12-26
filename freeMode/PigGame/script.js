const restartGame = document.querySelector('.newGame');
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');
const innerColor = document.querySelector('.innerColor');
const innerColorTwo = document.querySelector('.innerColorTwo');
let playerOne = document.querySelector('.pointsOne');
let playerTwo = document.querySelector('.pointsTwo');
const dice = document.querySelector('.dice');
const dice2 = document.querySelector('.dice2');
const dice3 = document.querySelector('.dice3');
const dice4 = document.querySelector('.dice4');
const dice5 = document.querySelector('.dice5');
const dice6 = document.querySelector('.dice6');

roll.addEventListener('click', () =>{ 
  
  while (playerOne.textContent != '1'){
    playerOne.textContent
    if (playerOne.textContent == '1'){
      innerColor.classList.add('hidden');
      innerColorTwo.classList.remove('hidden');
    }
  
  }
    
 

  

});
