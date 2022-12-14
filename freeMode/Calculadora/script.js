const allNums = document.querySelectorAll('.nums');
const sign = document.querySelectorAll('.signs');
const equal = document.querySelector('.equal');
const elevate = document.querySelector('.signEl');
let input = document.querySelector('.input');
let operatorSigns = [];
let numberSum =[];
let backup = [];
let result = [];
allNums.forEach(allNums => {
  allNums.addEventListener('click', () => {
    numberSum += allNums.textContent;
    input.textContent = numberSum;
    backup.push(input.textContent);

  });
});

let operator = (operatorSigns[operatorSigns.length - 1] == '+');
let createSign = document.createElement('sup');
let sum = 0;
let less = backup[backup.length - 1];

sign.forEach(sign => {
  sign.addEventListener('click', () => {
    createSign.textContent = sign.textContent;
    input.appendChild(createSign);
    setTimeout( () => {
      createSign.textContent = createSign.textContent;
      numberSum = [];
    },100)
    operatorSigns.push(createSign.textContent);
    if (operatorSigns[operatorSigns.length - 1] == '+'){
        sum += Number(backup[backup.length - 1]);
        input.textContent = sum;
        input.appendChild(createSign);
    } else if (operatorSigns[operatorSigns.length - 1] == '-'){
      sum -= Number(backup[backup.length - 1]);
      input.textContent = sum;
      input.appendChild(createSign);
    } else if (operatorSigns[operatorSigns.length - 1] == '*'){
      sum = 1;
      sum *= Number(backup[backup.length - 1]);
      input.textContent = sum;
      input.appendChild(createSign);
    } else{
      sum /=Number(backup[backup.length - 1]);
      input.textContent = sum;
      input.appendChild(createSign);
  
    }

  });
});

equal.addEventListener('click', () => {
  sum += Number(backup[backup.length - 1])
  input.textContent = sum;
  console.log(sum.length);

});
