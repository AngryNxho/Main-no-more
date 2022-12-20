const player = document.getElementById('player');
const ball = document.querySelector('.ball');
const velocidad = 50;
const mTop = 0;


document.addEventListener('keydown', (e) =>{
    if (e.key === 'ArrowUp'){
        console.log('arrowup');
        player.style.marginTop = velocidad + 'px'
    }
});