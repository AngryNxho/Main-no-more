// Rules functionality
const modal = document.querySelector('.modal');
const nameSendButton = document.querySelector('.sendName');
const btnOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
// const playAgain = document.querySelector('.again');

// btns functions
let numberLength = document.querySelector('.length');
const startGame = document.querySelector('.start');
const digits = document.querySelector('.digits');
let checkBtn = document.querySelector('.check');
let randomNumber = Math.trunc(Math.random() * 9) + 1;
let lista = [];
let playAgain = document.querySelector('.again');

// Info
let largo = (document.querySelector('.digits').textContent =
  numberLength.value);
let counter;
let famas = document.querySelector('.famas');
let toques = document.querySelector('.toques');
const numberLoop = function (length) {
  while (length > lista.length) {
    if (lista.includes(randomNumber)) {
      randomNumber = Math.trunc(Math.random() * 9) + 1;
    } else {
      lista.push(randomNumber);
    }
  }
  secretCode = lista;
  document.querySelector('.code').textContent = secretCode;
  console.log(secretCode);
  return lista;
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
const letThefunBegins = function () {
  document.querySelector(
    '.winner'
  ).textContent = `Debes adivinar un codigo con ${numberLength.value} Digitos`;
  numberLoop(numberLength.value);

  health = document.querySelector('.health').textContent = numberLength.value;
  checkBtn.addEventListener('click', function () {
    let userGuess = document.querySelector('.userCode').value;
    for (let i in lista) {
      let counter = 1;
      let z = 0;
      let y = 1;
      if (userGuess[i] == lista[i]) {
        counter++;
        famas.textContent++;
        toques.textContent++;
        console.log(numberLength.value, counter);        
        setTimeout(() => {
          console.log('TimeOut')
          famas.textContent = 0;
          toques.textContent = 0;
        
        },2000);

      }
       else if (
        (lista.includes(Number(userGuess[i])) &&
          userGuess[z] != userGuess[y]) ||
        userGuess[0] != userGuess[userGuess - 1]
      ) {
        z++;
        y++;
        // toques.textContent++;
      }
    }
    document.querySelector('.userCode').textContent = '';
    document.querySelector('.health').textContent--;
    if (document.querySelector('.health').textContent < 1) {
      document.querySelector('.health').textContent = 0;
      document.querySelector('.winner').textContent = 'GAME OVER';
    }
  });
};



startGame.addEventListener('click', letThefunBegins);
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    console.log('Enter was pressed');
    letThefunBegins();
  } if (e.key === 'Escape'){
    console.log('escape was pressed');
  closeModal();
  } else if (e.key === 'Escape'){
    console.log('Escape was pressed');
    closeModal()
  }
});

playAgain.addEventListener('click', function () {
  famas.textContent = 0;
  toques.textContent = 0;
});
