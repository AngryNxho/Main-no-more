'use strict';

// document.querySelector('.score').textContent = 2;
// document.querySelector('.vidas').textContent = 2;


let secretNumber = (Math.trunc(Math.random()* 20) + 1 );
let userGuess = document.querySelector('.input').value;
let score = 10;
let highscore = 0;

document.querySelector('.input').value = '';
const displayMessage = function(message){
    document.querySelector('.start').textContent = message; 
}


document.querySelector('.check').addEventListener('click', function(){
    let userGuess = Number(document.querySelector('.input').value);

    if (!userGuess){
        displayMessage('No es un numero')
        
    } else if (userGuess !== secretNumber){
        if (score < 1){
            displayMessage(userGuess > secretNumber ?'Muy Alto' : 'Muy Bajo')
            score--;
            document.querySelector('.input').value = '';
            document.querySelector('.score').textContent = score;
            if (score < 1){
                displayMessage('😭 GAME OVER')
                document.querySelector('.score').textContent = 0;
            }
                
        }
        
    } else if (userGuess === secretNumber){
        document.querySelector('.start').textContent = '🏆 Haz ganado!!!';
        document.querySelector('body').style.background = 'url(b5d55223b5fb572948d1e1e971ef4478.jpg)';
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }

});

document.querySelector('.again').addEventListener('click', function(){
   document.querySelector('.start').textContent = 'Empieza a adivinar';
   secretNumber =(Math.trunc(Math.random()* 20) + 1 );
   score = 10
   document.querySelector('.score').textContent = 10;
   document.querySelector('body').style.background = 'url(https://c4.wallpaperflare.com/wallpaper/1015/933/121/abstract-grey-gray-minimalist-wallpaper-preview.jpg)';
   document.querySelector('.input').value = '';

})