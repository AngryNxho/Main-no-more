// Buttons
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');
const newGame = document.querySelector('.newGame');

//players
let player1 = document.querySelector('.pointsOne');
let current = document.querySelector('.ScoreOne');
let arrayOne = [];


let player2 = document.querySelector('.pointsTwo');
let current2 = document.querySelector('.ScoreTwo');

// Counter
let i = 0;

//OverColor
const overColor = document.querySelector('.overColor');
const overColor2 = document.querySelector('.overColorTwo');

//fakes 
const scoreFake = document.querySelector('.ScoreOneFake');
const scoreFake2 = document.querySelector('.ScoreTwoFake');

const pointsOne = document.querySelector('.pointsOneFake');

roll.addEventListener('click', () =>{
        player1.textContent = Math.round(Math.random()*7)-1;
    if (player1.textContent < 0){
        player1.textContent = 0;

    }
  
    else{
        arrayOne.push(player1.textContent);
        i += Number(arrayOne[arrayOne.length - 1]);
        current.textContent = i;
    }

})