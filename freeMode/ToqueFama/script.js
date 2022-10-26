'use strict';

// document.querySelector('.score').textContent = 2;
// document.querySelector('.vidas').textContent = 2;


let secretNumber = (Math.trunc(Math.random()* 20) + 1 );
let userGuess = document.querySelector('.input').value;
let score = 20;


document.querySelector('.check').addEventListener('click', function(){
    let userGuess = Number(document.querySelector('.input').value);

    if (!userGuess){
        document.querySelector('.start').textContent = 'No es un numero'
    } else if (userGuess > secretNumber){
        document.querySelector('.start').textContent = 'Muy Alto';
        score--;
        document.querySelector('.score').textContent = score;
        if (score < 1){
            document.querySelector('.start').textContent = 'GAME OVER'
            document.querySelector('.score').textContent = 0;

        }
    } else if (userGuess < secretNumber){
        document.querySelector('.start').textContent = 'Muy Bajo';
        score--;
        document.querySelector('.score').textContent = score;
        if (score < 1){
            document.querySelector('.start').textContent = 'GAME OVER'
            document.querySelector('.score').textContent = 0;
        }
        
    } else if (userGuess === secretNumber){
        document.querySelector('.start').textContent = '🏆 Haz ganado!!!';
        document.querySelector('body').style.background = 'url(b5d55223b5fb572948d1e1e971ef4478.jpg)';

    }

});

document.querySelector('.again').addEventListener('click', function(){
   document.querySelector('.start').textContent = 'Empieza a adivinar';
   secretNumber =(Math.trunc(Math.random()* 20) + 1 );
   score = 20
   document.querySelector('.score').textContent = 20;
   document.querySelector('body').style.background = 'url(https://c4.wallpaperflare.com/wallpaper/1015/933/121/abstract-grey-gray-minimalist-wallpaper-preview.jpg)';
})