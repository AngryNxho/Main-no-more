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
  console.log(secretCode);
  return secretCode;
};

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
const letThefunBegins = function() {
  document.querySelector(
    '.winner'
  ).textContent = `Debes adivinar un codigo con ${numberLength.value} Digitos`;
  numberLoop(numberLength.value);

  health = document.querySelector('.health').textContent = numberLength.value;
  checkBtn.addEventListener('click', function (){
    let userGuess = document.querySelector('.userCode').value;
    counter = 0;

    for (let i in secretCode) {
      let z = 0;
      let y = 1;

      if (userGuess[i] == secretCode[i]) {
        counter++;
        famas.textContent++;
        toques.textContent++;
        console.log(userGuess == secretCode);
        console.log(counter, numberLength.value);

        if (counter == numberLength.value) {
          document.querySelector('.winner').textContent = 'GANADOR';
          toques.textContent = numberLength.value;
          famas.textContent = numberLength.value;
        } 
        else {
          setTimeout(() => {
            console.log('TimeOut');
            famas.textContent = 0;
            toques.textContent = 0;
          }, 2000);
        }
      } else if (
        secretCode.includes(Number(userGuess[i])) &&
        userGuess[z] != userGuess[y]
      ) {
        document.querySelector('.health').textContent--;
        health.textContent--;
        counter++;
        z++;
        y++;
        toques.textContent++;
        setTimeout(() => {
          console.log('TimeOut');
          famas.textContent = 0;
          toques.textContent = 0;
        }, 2000);
      }
    }
    document.querySelector('.userCode').textContent = '';
    if (document.querySelector('.health').textContent < 1) {
      document.querySelector('.health').textContent = 0;
      document.querySelector('.winner').textContent = 'GAME OVER';
      // toques.textContent = 0;
      // famas.textContent = 0;
      
    }
  });
  
};

startGame.addEventListener('click', letThefunBegins);
playAgain.addEventListener('click', function() {
  secretCode = [];
  famas.textContent = 0;
  toques.textContent = 0;
  console.log(numberLength.value, toques.textContent, famas.textContent);
  document.querySelector('.code').textContent = '?';
  document.querySelector('.winner').textContent = `Debes adivinar un codigo con ${numberLength.value} digitos`;
  console.log(secretCode);
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

