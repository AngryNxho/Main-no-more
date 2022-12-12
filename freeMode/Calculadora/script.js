const allNums = document.querySelectorAll('.nums');
let input = document.querySelector('.input');
const numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
allNums.forEach(allNums => {
  allNums.addEventListener('click', e => {
    if (allNums.innerHTML == numsArray[0]) {
      input.textContent = numsArray[0];
    } else if (allNums.innerHTML == numsArray[1]) {
      input.textContent = numsArray[1];
    }
  });
});
