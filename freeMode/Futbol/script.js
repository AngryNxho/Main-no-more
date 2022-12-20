const player = document.getElementById('player');
const ball = document.querySelector('.ball');
const velocidad = 25;
let mTop = 0
let mLeft = 0;
let ballTop = 0;

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp') {
    mTop -= velocidad;
    player.style.marginTop = mTop + 'px';

    if (mTop == ballTop){
        ballTop -= velocidad;
        ball.style.marginTop = mTop + 'px';

    }
  }else if (e.key === 'ArrowDown') {
    mTop += velocidad;
    player.style.marginTop = mTop + 'px';
  }else if (e.key === 'ArrowLeft'){
    mLeft -= velocidad;
    player.style.marginLeft = mLeft + 'px';
  }else if (e.key === 'ArrowRight'){
    mLeft += velocidad;
    player.style.marginLeft = mLeft + 'px';
  }

});
