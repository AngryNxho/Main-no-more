const allNums = document.querySelectorAll('.nums');
const sign = document.querySelectorAll('.signs');
const equal = document.querySelectorAll('.equal');
let input = document.querySelector('.input');
let one = [];
let array = [];
allNums.forEach(allNums => {
  allNums.addEventListener('click', () => {
    input.textContent = allNums.textContent;
    one.push(allNums.innerHTML);
    console.log(input.textContent);
  });
});

sign.forEach(sign => {
  sign.addEventListener('click', () => {
    input.textContent = sign.textContent;
    array.push(sign.innerHTML);
    console.log(array[array.length - 1]);
  });
});

equal.forEach(equal => {
  equal.addEventListener('click', () => {
    if (array[array.length - 1] == '+') {
      let sum = Number(one[one.length - 2]) + Number(one[one.length - 1]);
      input.textContent = sum;
    } else if (array[array.length - 1] == '-') {
      let res = Number(one[one.length - 2]) - Number(one[one.length - 1]);
      input.textContent = res;
    } else if (array[array.length - 1] == '*') {
      let mult = Number(one[one.length - 2]) * Number(one[one.length - 1]);
      input.textContent = mult;
    } else {
      let div = Number(one[one.length - 2]) / Number(one[one.length - 1]);
      input.textContent = div;
    }
  });
});
