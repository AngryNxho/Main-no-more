const btn = document.querySelector('.submit');
const content = document.querySelector('.content');
let input = document.querySelector('input');
const remove = document.querySelector('.remove');
const check = document.querySelector('.check')

btn.addEventListener('click', () => {
  const element = document.createElement('p');
  element.textContent = input.value;
  content.appendChild(element);
});





