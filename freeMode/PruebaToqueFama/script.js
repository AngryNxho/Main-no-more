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
let health = (document.querySelector('.health'));
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
  // document.querySelector('.code').textContent = secretCode;
  console.log(secretCode);
  return secretCode;
}; 

const timeOutFunction = function(){
  setTimeout(() => {
        console.log('TimeOut');
        famas.textContent = 0;
        toques.textContent = 0;
      }, 2000);
}   


const openModal = function () {
  modal.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
};

nameSendButton.addEventListener('click', function () {
  console.log(famas.textContent,toques.textContent);
  let username = document.querySelector('.name').value;
  document.querySelector('.sign').textContent = `Bienvenid(o/a) ${username}`;
});
const checkBtnFunction = btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
const letThefunBegins = function() {
  console.log(famas.textContent, toques.textContent);
  document.querySelector(
    '.winner'
  ).textContent = `Debes adivinar un codigo con ${numberLength.value} Digitos`;
  numberLoop(numberLength.value);

  health = document.querySelector('.health').textContent = numberLength.value;
  
  
};

const restartGame = function() {
  secretCode = [];
  toques.textContent = 0;
  famas.textContent = 0;
  document.querySelector('.code').textContent = '?';
  document.querySelector('.winner').textContent = `Debes adivinar un codigo con ${numberLength.value} digitos`;
  console.log(toques.textContent, famas.textContent);
  };



checkBtn.addEventListener('click', function (){
    console.log(toques.textContent, famas.textContent);
    let userGuess = document.querySelector('.userCode').value;
    counter = 0;
  
    for (let i in secretCode) {
      let z = 0;
      let y = 1;
  
      if (userGuess[i] == secretCode[i]) {
        counter++;
        famas.textContent++;
        toques.textContent++;
  
        if (counter == numberLength.value) {
          document.querySelector('.winner').textContent = 'GANADOR';
          toques.textContent = numberLength.value;
          famas.textContent = numberLength.value;
        } else{
          timeOutFunction();
        }
      } 
      else if (secretCode.includes(Number(userGuess[i]))){
        document.querySelector('.health').textContent--;
        health.textContent--;
        counter++;
        z++;
        y++;
        toques.textContent++;
        timeOutFunction();
      } else{
        health.textContent--;
      }
    }
    document.querySelector('.userCode').textContent = '';
    if (document.querySelector('.health').textContent < 1) {
      document.querySelector('.health').textContent = 0;
      document.querySelector('.winner').textContent = 'GAME OVER';
      document.querySelector('.code').textContent = `El codigo era ${secretCode}`;
      
    }
  });
  
startGame.addEventListener('click', letThefunBegins);
playAgain.addEventListener('click', restartGame);


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
