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
let largo = document.querySelector('.digits').textContent = numberLength.value;
let counter;
let vidas;
const numberLoop = function(length) {
  while (length > lista.length) {
    if (lista.includes(randomNumber)) {
      randomNumber = Math.trunc(Math.random() * 9) + 1;
    } else {
      lista.push(randomNumber);
    }
  }
  secretCode = lista
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

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
startGame.addEventListener('click', function(){
  document.querySelector('.winner'). textContent = `Debes adivinar un codigo con ${numberLength.value} Digitos`;
  numberLoop(numberLength.value)
  vidas = numberLength.textContent;
});

 
playAgain.addEventListener('click', function(){
  famas.textContent = 0;
  toques.textContent = 0;
})

