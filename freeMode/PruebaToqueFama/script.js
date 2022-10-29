// Rules functionality
const modal = document.querySelector('.modal');
const nameSendButton = document.querySelector('.sendName');
const btnOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// btns
let numberLength = (document.querySelector('.length'));
const startGame = document.querySelector('.start');
const digits = document.querySelector('.digits');
let checkBtn = document.querySelector('.check');
let randomNumber = Math.trunc(Math.random() * 9) + 1;
let lista = [];

// Info
const famas = document.querySelector('.famas').textContent = 0;
const toques = document.querySelector('.toques').textContent = 0;


let changeDigits = function(){
    largo = document.querySelector('.digits').textContent = numberLength.value;
}


const numberLoop = function(length) {
  while (length > lista.length) {
    if (lista.includes(randomNumber)) {
      randomNumber = Math.trunc(Math.random() * 9) + 1;
    } else {
      lista.push(randomNumber);
    }
  }
  let secretCode = lista
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
startGame.addEventListener('click', changeDigits, );
startGame.addEventListener('click', function(length) {
  while (length.value > lista.length) {
    if (lista.includes(randomNumber)) {
      randomNumber = Math.trunc(Math.random() * 9) + 1;
    } else if(!lista.includes){
      lista.push(randomNumber);
    }
  }
  console.log(lista);
  document.querySelector('.code').textContent = numberLoop(largo);
  console.log(lista);

  checkBtn.addEventListener('click', function(){
    let userGuess = (document.querySelector('.userCode').value);
  
    for (let i = 0; i < lista.length; i++){
      if (lista[i] == userGuess[i]){
        document.querySelector('.famas').textContent++;

      }

      console.log(lista[i]);
    }

  });
})

