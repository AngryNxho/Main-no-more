'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenmodal = document.querySelectorAll('.show-modal');

const closemodal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const OpenModal = function(){ 
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenmodal.length; i++)
    btnsOpenmodal[i].addEventListener('click', OpenModal);

    
btnCloseModal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);