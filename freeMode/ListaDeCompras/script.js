const btn = document.querySelector('.submit');
const content = document.querySelector('.content');
let input = document.querySelector('input');

btn.addEventListener('click', () => {
  let array = [];
  let element = document.createElement('p');
  element.textContent = input.textContent;
  content.insertAdjacentHTML('beforeend', element.textContent);
  console.log(array);
  console.log(array.length);
});
