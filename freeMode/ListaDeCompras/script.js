const btn = document.querySelector('.submit');
const content = document.querySelector('.content');
const getBack = document.querySelector('.back');
let input = document.querySelector('input');
let array = [];
let backup = [];
btn.addEventListener('click', () => {
  const element = document.createElement('p');
  element.textContent = input.value;
  content.appendChild(element);
  
  if (input.value.length > 0){
    array.push(element.textContent);
    let del = document.createElement('button');
    del.textContent = 'delete'
    element.appendChild(del);
    element.classList.add('hidden')
    
  }
  input.value = '';
  console.log(array, backup);
});






