const restartGame = document.querySelector('.newGame');
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');
const innerColor = document.querySelector('.innerColor');
const innerColorTwo = document.querySelector('.innerColorTwo');
let playerOne = document.querySelector('.pointsOne');
let playerTwo = document.querySelector('.pointsTwo');
let scoreOne = document.querySelector('.ScoreOne');
const dice = document.querySelector('.dice');
const dice2 = document.querySelector('.dice2');
const dice3 = document.querySelector('.dice3');
const dice4 = document.querySelector('.dice4');
const dice5 = document.querySelector('.dice5');
const dice6 = document.querySelector('.dice6');
let backup = [];
let x = [];
roll.addEventListener('click', () =>{
    playerOne.textContent = Math.round(Math.random () * 5) + 1;
    backup.push(playerOne.textContent);
    for (let i = 0; i < backup.length; i++){
        i
        x += backup[i];
        scoreOne.textContent = x;   
        console.log(backup[i]);
    }
});
