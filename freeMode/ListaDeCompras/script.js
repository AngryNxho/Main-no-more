const btn = document.querySelector('.submit');
const content = document.querySelector('.content');
let input = document.querySelector('input');
const btns = document.querySelectorAll('button');

btn.addEventListener('click', () => {
  const element = document.createElement('p');
  element.textContent = input.value;
  content.appendChild(element);
  if (input.value.length > 0){
    let del = document.createElement('button');
    del.textContent = 'delete'
    element.appendChild(del);
    element.classList.add('hidden')
  }
});


// for (let x = 0 ; x < btns.length; x++){
  // 
// };




