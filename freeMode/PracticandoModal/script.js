'use strict'

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay')

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

const closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);
    console.log('Hola');

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)