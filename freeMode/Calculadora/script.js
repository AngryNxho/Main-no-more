const allNums = document.querySelectorAll('.nums');
const sign = document.querySelectorAll('.signs')
let input = document.querySelector('.input');
let one = [];
let x = 0;
allNums.forEach(allNums => {
  allNums.addEventListener('click', () => {
    input.textContent = (allNums.textContent[x]);

  });
});

sign.forEach(sign => {
  sign.addEventListener('click', () => 
  input.textContent = (sign.textContent[x]))
})