const allNums = document.querySelectorAll('.nums');
const sign = document.querySelectorAll('.signs');
const equal = document.querySelector('.equal');
const elevate = document.querySelector('.signEl');
let input = document.querySelector('.input');
let operatorSigns = [];
let numberSum =[];
let backup = [];
let sum = 0;
let mult = 1;
let resta = backup[backup.length - 1];


allNums.forEach(allNums => {
  allNums.addEventListener('click', () => {
    numberSum += allNums.textContent;
    input.textContent = numberSum;
    backup.push(input.textContent);

  });
});

let createSign = document.createElement('sup');

sign.forEach(sign => {
  sign.addEventListener('click', () => {
    createSign.textContent = sign.textContent;
    input.appendChild(createSign);
    setTimeout( () => {
      createSign.textContent = createSign.textContent;
      let a = numberSum;
      numberSum = [];
    },100)
    operatorSigns.push(createSign.textContent);
    if (operatorSigns[operatorSigns.length - 1] == '+'){
      sum += Number(backup[backup.length - 1]);
      input.textContent = sum;
      input.appendChild(createSign);
      
    }else if (operatorSigns[operatorSigns.length - 1] == '*'){
      mult *= Number(backup[backup.length - 1]);
      input.textContent = mult;
      input.appendChild(createSign);
      console.log(backup);
    } else if (operatorSigns[operatorSigns.length - 1] == '-'){
      input.appendChild(createSign);

      resta = Number(backup[backup.length - 2]);
      if (backup.length > 1){
        resta -= (Number(backup[backup.length - 1]));
        input.textContent = resta;

      }

    }
  });
});

equal.addEventListener('click', () => {
  if (operatorSigns[operatorSigns.length - 1] == '+'){
    sum += Number(backup[backup.length - 1])
    input.textContent = sum;
  }
});
