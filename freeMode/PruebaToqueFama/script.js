// Rules functionality
const modal = document.querySelector('.modal');
const nameSendButton = document.querySelector('.sendName');
const btnOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// btns functions
let numberLength = document.querySelector('.length');
const startGame = document.querySelector('.start');
const digits = document.querySelector('.digits');
let checkBtn = document.querySelector('.check');
let randomNumber = Math.trunc(Math.random() * 9) + 1;
let secretCode = [];
let health = document.querySelector('.health');
const playAgain = document.querySelector('.again');


// Info
let largo = (document.querySelector('.digits').textContent =
  numberLength.value);
let counter;
let famas = document.querySelector('.famas');
let toques = document.querySelector('.toques');
const numberLoop = function (length) {
  while (length > secretCode.length) {
    if (secretCode.includes(randomNumber)) {
      randomNumber = Math.trunc(Math.random() * 9) + 1;
    } else {
      secretCode.push(randomNumber);
    }
  }
  secretCode = secretCode;
  document.querySelector('.code').textContent = secretCode;
  return secretCode;
};

const timeOutFunction = function(){
  setTimeout(() => {
        console.log('TimeOut');
        famas.textContent = 0;
        toques.textContent = 0;
      },1000);
}   


const openModal = function () {
  modal.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
};

nameSendButton.addEventListener('click', function () {
  let username = document.querySelector('.name').value;
  document.querySelector('.sign').textContent = `Bienvenid(o/a) ${username}`;
});
const checkBtnFunction = btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);

startGame.addEventListener('click',function() {
  famas.textContent = 0;
  document.querySelector(
    '.winner'
  ).textContent = `Debes adivinar un codigo con ${numberLength.value} Digitos`;
  numberLoop(numberLength.value);

  health = document.querySelector('.health').textContent = numberLength.value;
  checkBtn.addEventListener('click', function (){
    let userGuess = (document.querySelector('.userCode').value);
    secretCode = (secretCode)
    counter = 0;
    c2 = 0;


    //ACA ESTA EL BUG DE MIERDA
    for (let i = 0; i < secretCode.length; i++){
      let x = 2;
      if (secretCode.includes(Number(userGuess[i])) && userGuess[i] != userGuess[x]){
        x++;
        toques.textContent++;
      } 
    }

    document.querySelector('.userCode').textContent = '';
    if (document.querySelector('.health').textContent < 1) {
      document.querySelector('.health').textContent = 0;
      document.querySelector('.winner').textContent = 'GAME OVER';
      
    }
  });
  
});



document.addEventListener('keydown',function(e) {
  if (e.key === 'Enter') {
    console.log('Enter was pressed');
    letThefunBegins();
  }
  if (e.key === 'Escape') {
    console.log('escape was pressed');
    closeModal();
  }
});
