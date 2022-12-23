const inputName = document.getElementById('name');
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const image = document.querySelector('.image');
const fran = document.querySelector('.fran');
const lucas = document.querySelector('.lucas');
const esteban = document.querySelector('.papa');
const mama = document.querySelector('.mama');
const yo = document.querySelector('.yo');
let name = [];
let array = ['Ignacio', 'Alejandra', 'Esteban', 'Lucas', 'Francisca'];
btn.addEventListener('click', () => {
  if (array.includes(inputName.value)) {
    let message = document.createElement('p');
    message.textContent = `Bienvenido/a ${inputName.value}`;
    content.appendChild(message);
    name.push(inputName.value);

    setTimeout(() => {
      content.classList.add('hidden');
      btn.classList.add('hidden');
      inputName.classList.add('hidden');
      image.classList.remove('hidden');
    }, 2500);

    image.addEventListener('click', () => {
      if (name[name.length - 1] == 'Francisca') {
        image.classList.add('hidden');
        setTimeout(() => {
          fran.classList.remove('hidden');
        }, 1000);
      } else if (name[name.length - 1] == 'Lucas') {
        image.classList.add('hidden');
        setTimeout(() => {
          lucas.classList.remove('hidden');
        }, 1000);
      } else if (name[name.length - 1] == 'Esteban') {
        image.classList.add('hidden');
        setTimeout(() => {
          esteban.classList.remove('hidden');
        }, 1000);
      } else if (name[name.length - 1] == 'Alejandra') {
        image.classList.add('hidden');
        setTimeout(() => {
          mama.classList.remove('hidden');
        }, 1000);
      } else if (name[name.length - 1] == 'Ignacio') {
        image.classList.add('hidden');
        setTimeout(() => {
          yo.classList.remove('hidden');
        }, 1000);
      }
    });
  }
});
