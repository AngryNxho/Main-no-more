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
let userGuess = document.querySelector('.userCode').value;
console.log(userGuess);
console.log(numberLength);

const changeDigits = function(){
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
startGame.addEventListener('click', changeDigits);
checkBtn.addEventListener('click', function(length) {
  while (length.value > lista.length) {
    if (lista.includes(randomNumber)) {
      randomNumber = Math.trunc(Math.random() * 9) + 1;
    } else if(!lista.includes){
      lista.push(randomNumber);
    }
  }
  console.log(lista);
  document.querySelector('.code').textContent = numberLoop(largo);
  return lista;
  
});

checkBtn.addEventListener('click', function(){
  if (userGuess === '1'){
    document.querySelector('.code').textContent = 'Winner'
  }
})

