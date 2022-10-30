// Rules functionality
const modal = document.querySelector('.modal');
const nameSendButton = document.querySelector('.sendName');
const btnOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
// const playAgain = document.querySelector('.again');

// btns
let numberLength = (document.querySelector('.length'));
const startGame = document.querySelector('.start');
const digits = document.querySelector('.digits');
let checkBtn = document.querySelector('.check');
let randomNumber = Math.trunc(Math.random() * 9) + 1;
let lista = [];
let playAgain = document.querySelector('.again');
// Info
let changeDigits = function(){
    largo = document.querySelector('.digits').textContent = numberLength.value;
} 
let  a = document.querySelector('.t');
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
startGame.addEventListener('click', function(length) {
  while (length.value > lista.length) {
    if (lista.includes(randomNumber)) {
      randomNumber = Math.trunc(Math.random() * 9) + 1;
    } else if(!lista.includes){
      lista.push(randomNumber);
    }
  }
  document.querySelector('.code').textContent = numberLoop(largo);
  // document.querySelector('.code').classList.add('hidden');
  vidas = largo;
  checkBtn.addEventListener('click', function(){

    let userGuess = (document.querySelector('.userCode').value);
  
    for (let i in lista){
      counter = 1

      let z = 0;
      let y = 1;
      famas = document.querySelector('.famas'); 
      toques = document.querySelector('.toques'); 
      if (userGuess[i] == lista[i]){
        counter++;
        famas.textContent++;
        toques.textContent++;
        counter++;
        document.querySelector;
        if (famas.textContent == lista.length){
            document.querySelector('.code').classList.remove('hidden');
            document.querySelector('.winner').textContent = 'GANADOR';
        }
      } else if (lista.includes(Number(userGuess[i])) && userGuess[z] != userGuess[y]){
        console.log(counter);        
        z++;
        y++;
        toques.textContent++;
      };
    };
});

 
});
playAgain.addEventListener('click', function(){
  famas.textContent = 0;
  toques.textContent = 0;
})

