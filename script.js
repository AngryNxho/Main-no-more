let randomNumber = Math.trunc(Math.random() * 9) + 1;

let lista = [];

const numberLoop = function(length) {
    while (length > lista.length) {
      if (lista.includes(randomNumber)) {
        randomNumber = Math.trunc(Math.random() * 9) + 1;
      } else {
        lista.push(randomNumber);
      }
    }
    
    return lista;
  };

const a = numberLoop(9);
console.log(a);