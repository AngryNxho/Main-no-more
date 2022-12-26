const restartGame = document.querySelector('.newGame');
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');
const innerColor = document.querySelector('.innerColor');
const innerColorTwo = document.querySelector('.innerColorTwo');
let playerOne = document.querySelector('.pointsOne');
const dice = document.querySelector('.dice');
const dice2 = document.querySelector('.dice2');
const dice3 = document.querySelector('.dice3');
const dice4 = document.querySelector('.dice4');
const dice5 = document.querySelector('.dice5');
const dice6 = document.querySelector('.dice6');
const timeOut = setTimeout(() => {
  dice.classList.add('hidden');
  dice2.classList.add('hidden');
  dice3.classList.add('hidden');
  dice4.classList.add('hidden');
  dice5.classList.add('hidden');
  dice6.classList.add('hidden');
}, 2000);
roll.addEventListener('click', () => {
  while (playerOne.textContent != 1) {
    playerOne.textContent = Math.round(Math.random() * 5) + 1;
    if (playerOne.textContent == '1') {
      dice.classList.remove('hidden');
      playerOne.textContent = '1';
      timeOut();
    } else if (playerOne.textContent == '2') {
      dice2.classList.remove('hidden');
      timeOut();
    } else if (playerOne.textContent == '3') {
      dice3.classList.remove('hidden');
      timeOut();
    } else if (playerOne.textContent == '4') {
      dice4.classList.remove('hidden');

      timeOut();
    } else if (playerOne.textContent == '5') {
      dice5.classList.remove('hidden');

      timeOut();
    } else {
      dice6.classList.remove('hidden');
      timeOut();
    }
    
  }
 
  if (playerOne.textContent == '1'){
    innerColor.classList.add('hidden');
    innerColorTwo.classList.remove('hidden');
}
});
