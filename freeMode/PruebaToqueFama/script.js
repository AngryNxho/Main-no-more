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
  secretCode = lista
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
  document.querySelector('.code').textContent = numberLoop(largo);

  checkBtn.addEventListener('click', function(){
    let userGuess = (document.querySelector('.userCode').value);
  
    for (let i in lista){
      famas = document.querySelector('.famas'); 
      toques = document.querySelector('.toques'); 
      if (userGuess[i] == lista[i]){
        famas.textContent++;
        toques.textContent++;
        if (famas.textContent >= lista.length){
          document.querySelector('.winner').textContent = 'GANADOR';
      } 

        // document.querySelector('.famas').textContent++;
      } 
      if (lista.includes(Number(userGuess[i] && userGuess[0] != userGuess[i - 1]))){
        // document.querySelector('.toques').textContent++;
        toques.textContent++;
      };
    };
  });
})

