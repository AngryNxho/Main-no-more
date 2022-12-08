const btn = document.querySelector('.submit');
const content = document.querySelector('.content');
let input = document.querySelector('input');

btn.addEventListener('click', () => {
  let elemento = document.createElement('li');
  elemento.textContent = input.value;
  content.insertAdjacentHTML('beforeend', elemento.textContent)

});
