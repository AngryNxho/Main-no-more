const allNums = document.querySelectorAll('.nums');
const sign = document.querySelectorAll('.signs');
const equal = document.querySelector('.equal');
const elevate = document.querySelector('.signEl');
let input = document.querySelector('.input');
let operatorSigns = [];
let numberSum =[];
let backup = [];
allNums.forEach(allNums => {
  allNums.addEventListener('click', () => {
    numberSum += allNums.textContent;
    input.textContent = numberSum;
    console.log(numberSum.length);
  });
});


sign.forEach(sign => {
  sign.addEventListener('click', () => {
    let createSign = document.createElement('sup');
    backup.push(input.textContent);
    createSign.textContent = sign.textContent;  
    if (createSign.textContent == '+'){
      operatorSigns.push('+');
      numberSum = [];
      setTimeout( () => {
        input.textContent = '0';
      },500)
      input.appendChild(createSign);
      
    } else if (createSign.textContent == '-'){
      operatorSigns.push('-');
      numberSum = [];
      setTimeout( () => {
        input.textContent = '0';
      },500)
      input.appendChild(createSign);
      
    } else if (createSign.textContent == '*'){
      operatorSigns.push('*');
      numberSum = [];
      setTimeout( () => {
        input.textContent = '0';
      },500)
      input.appendChild(createSign);
      
    } else{
      operatorSigns.push('/');
      numberSum = [];
      setTimeout( () => {
        input.textContent = '0';
      },500)
      input.appendChild(createSign);
    }
    
    
   
  });
});


equal.addEventListener('click', () => {
  if (operatorSigns[operatorSigns.length - 1] == '+'){
    console.log(operatorSigns);
    backup.push(numberSum[numberSum.length - 1])
    input.textContent = (Number(backup[backup.length - 2]) + Number(backup[backup.length - 1]));
  }else if (operatorSigns[operatorSigns.length - 1] == '-'){
    console.log(operatorSigns);
    backup.push(numberSum[numberSum.length - 1])
    input.textContent = (Number(backup[backup.length - 2]) - Number(backup[backup.length - 1]));
  }else if (operatorSigns[operatorSigns.length - 1] == '*'){
    console.log(operatorSigns);
    backup.push(numberSum[numberSum.length - 1])
    input.textContent = (Number(backup[backup.length - 2]) * Number(backup[backup.length - 1]));
  } else{
    console.log(operatorSigns);
    backup.push(numberSum[numberSum.length - 1])
    input.textContent = (Number(backup[backup.length - 2]) / Number(backup[backup.length - 1]));

  }
});