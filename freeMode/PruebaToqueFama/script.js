const modal = document.querySelector('.modal')
const nameSendButton = document.querySelector('.sendName');
const btnOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const numberLength = document.querySelector('.length');
let randomNumber = Math.trunc(Math.random() * 9) + 1; 
const check = document.querySelector('.start');
const digits = document.querySelector('.digits');

let lista = [];

const numberLoop = function(length){

    while (length > lista.length){
        if (lista.includes(randomNumber)){
            randomNumber = Math.trunc(Math.random() * 9) + 1;
        } else {
            lista.push(randomNumber);
        }
    }

    return lista;
}

check.addEventListener('click', numberLoop(numberLength));

console.log(numberLoop(9)); 






const openModal = function(){
    modal.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
}

nameSendButton.addEventListener('click', function(){
    let username = document.querySelector('.name').value
    document.querySelector('.sign').textContent = `Bienvenid(o/a) ${username}`;
})

btnOpenModal.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)


