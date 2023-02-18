const btn = document.querySelector('.submit');
const content = document.querySelector('.content');
const deleteAll = document.querySelector('.clear');
let input = document.querySelector('input');
let array = [];
let backup = [];
const browser = document.getElementById('browser');



const startShopping = function () {
  const element = document.createElement('p');
  element.textContent = input.value;
  content.appendChild(element);
  if (input.value.length > 0) {
    array.push(element.textContent);
    let del = document.createElement('button');
    del.textContent = 'Ready';
    element.appendChild(del);
    element.classList.add('hidden');

    del.addEventListener('click', () => {
      element.remove();
    });

    for (let x = 0; x < array.length; x++) {
      deleteAll.addEventListener('click', () => {
        element.remove();
      });
    }

    
  }

  input.value = '';
  console.log(array, backup);
};




btn.addEventListener('click', startShopping);
document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter'){
    console.log('Enter was pressed');
    startShopping();
  };
});



